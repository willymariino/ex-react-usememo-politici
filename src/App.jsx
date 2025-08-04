/*
 Premessa: Stai costruendo una pagina per visualizzare una lista di politici. Tuttavia, vuoi evitare calcoli inutili e ottimizzare la performance del tuo componente. Segui le milestone per migliorare progressivamente il codice

 📌 Milestone 1: Recuperare e visualizzare i dati
Effettua una chiamata API a
http://localhost:3333/politicians

Salva la risposta in uno stato React (useState).

Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:

Nome (name)
Immagine (image)
Posizione (position)
Breve biografia (biography)

Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.

📌 Milestone 2: Implementare la ricerca ottimizzata
Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.
Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
❌ Non usare useEffect per aggiornare l’array filtrato.

Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.

📌 Milestone 3: Ottimizzare il rendering delle card con React.memo
Attualmente, ogni volta che l’utente digita nella barra di ricerca, tutte le card vengono ri-renderizzate, anche quelle che non sono cambiate.
Usa React.memo() per evitare il ri-render delle card quando le loro props non cambiano.
Aggiungi un console.log() dentro il componente Card per verificare che venga renderizzato solo quando necessario.

Obiettivo: Se la lista filtrata cambia, solo le nuove card devono essere renderizzate, mentre le altre rimangono in memoria senza essere ridisegnate.

*/
import { useState, useEffect, useMemo } from "react"
import axios from "axios"
import PoliticiansCard from "./components/PoliticiansCard"

// Funzione asincrona per recuperare i dati dei politici dall'API e salvarli nello stato
async function fetchPoliticiansData(setData) {
  try {
    // Effettua la chiamata GET all'endpoint specificato
    const res = await axios.get("http://localhost:3333/politicians")
    // Salva i dati ottenuti nello stato React
    setData(res.data)
  }
  catch {
    console.error("errore nel caricamento dei dati")
  }
}

function App() {
  // Stato che contiene la lista completa dei politici
  const [data, setData] = useState([])
  // Stato che contiene il testo inserito dall'utente per la ricerca
  const [searchText, setSearchText] = useState("")

  // Effettua il fetch dei dati solo al primo render del componente (componentDidMount)
  useEffect(() => {
    fetchPoliticiansData(setData) // invocazione della funzione dei politici
  }, [])

  // Crea una versione filtrata della lista dei politici, aggiornata solo quando cambiano 'data' o 'searchText'
  // useMemo evita ricalcoli inutili se i valori di dipendenza non cambiano
  const filteredPoliticians = useMemo(() => {
    // Filtra i politici per nome o biografia che includano il testo cercato (case-insensitive)
    return data.filter(politician =>
      politician.name.toLowerCase().includes(searchText.toLowerCase()) ||
      politician.biography.toLowerCase().includes(searchText.toLowerCase())
    )
  }, [data, searchText])

  return (
    <>
      {/* Campo di ricerca per filtrare i politici per nome o biografia */}
      <p>
        <strong> cerca il politico:</strong>
        <input className="search-bar"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="cerca per nome o biografia"
        />
      </p>

      {/* Container delle card dei politici */}
      <div className="card-container">
        {/* Mappa la lista filtrata e crea una card per ogni politico */}
        {filteredPoliticians.map((politician) => (
          <PoliticiansCard key={politician.id} politician={politician} />
        ))}
      </div>
    </>
  )
}

export default App




