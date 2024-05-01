import { useState , useEffect } from "react"

function ArtsSection() {

  const [art, setArt] = useState([])
  
  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then(response => response.json())
      .then(setArt)
     
  }, [])
  console.log(art)
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {art.map(t => 
            <li key={t.id}>
              <div className="frame">
                <img
                  src={`https://boolean-api-server.fly.dev${t.imageURL}`}
                />
              </div>
              <h3>{t.title}</h3>
              <p>{t.artist}</p>
              <h4>Publication History:</h4>
              <ul>
                <li>{t.publicationHistory}</li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default ArtsSection


{/* {art.map(t => 
            <li >
              <div className="frame">
                <img
                  src="https://boolean-api-server.fly.dev/images/paris-street-rainy-day.jpg"
                />
              </div>
              <h3>Paris Street; Rainy Day</h3>
              <p>Artist: Gustave Caillebotte</p>
              <h4>Publication History:</h4>
              <ul>
                <li>Catalogue de la 3e exposition de peinture, exh. cat. (E. Capiomont et V. Renault, 1877), p. 3, cat. 1.</li>
                <li>Léon Mancino, “La descente de la courtille,” L’art 9 (Apr. 1877), p. 70.</li>
                <li>Anonymous [possibly Gaston Vassy], “La journée à Paris: L’exposition des impressionnalistes,” L’événement, Apr. 6, 1877, p. 2.</li>
              </ul>
            </li>
          )}*/}