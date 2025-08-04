import { memo } from "react"

// Componente che visualizza le informazioni di un singolo politico
// Viene memoizzato con React.memo per evitare ri-render inutili se le props non cambiano
function PoliticiansCard({ politician }) {
    // Console log per verificare quando il componente viene renderizzato
    console.log("Render PoliticiansCard:", politician.name)

    return (

        <div className="card">

            {/* Contenitore per l'immagine del politico */}
            <div className="image-container">
                <img src={politician.image} className="politician-image" alt={politician.name} />
            </div>

            <div className="description-box">

                <p>name: {politician.name}</p>
                <p>position: {politician.position}</p>
                <p>biography: {politician.biography}</p>

            </div>


        </div>


    )
}

// Esporta il componente memoizzato per ottimizzare il rendering
export default memo(PoliticiansCard)