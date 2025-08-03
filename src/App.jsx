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

*/
import { useState, useEffect } from "react"

function App() {

  const [data, setData] = useState(null)

  async function fetchPoliticiansData() {
    try {
      const res = await axios.get("http://localhost:3333/politicians")
      setData(res.data)
    }
    catch {
      console.error("errore durante il caricamento dei dati")
    }

  }

  useEffect(fetchPoliticiansData, [])

  return (
    <>

    </>
  )
}

export default App
