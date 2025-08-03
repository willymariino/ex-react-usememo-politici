function PoliticiansCard({ politician }) {

    return (

        <div className="card">

            <div className="image-container">
                <img src={politician.image} className="politician-image" alt={politician.name} />

            </div>

            <div className="description-box">

                <p>name: {politician.name}</p>
                <p>postion: {politician.position}</p>
                <p>biography: {politician.biography}</p>

            </div>


        </div>


    )
}

export default PoliticiansCard