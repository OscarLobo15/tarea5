import "../CSS/style2.css";
import foto from "../imagenes/Imagenes/starfield.jpg";

function Max() {
  return(
    <main class="main-content">
      <div class="column">
          <h2>Videojuegos</h2>
              <p>Mi pasatiempo mas común serian los videojuegos, estos variando en generos y tipos, por ejemplo este año he jugado:</p>
              <ul>
                  <li>Zelda Tears of the Kingdom en Nintendo Switch</li>
                  <li>Red Dead Redemption en PC</li>
                  <li>Por ultimo estoy a la espera de Starfield que saldra en Septiembre</li>
              </ul>
              <img width="560" height="315"src={foto} alt="Videojuegos Image"></img>
      </div>       

      <div class="column">
          <h2>Rugby</h2>
              <p>Por ultimo, mi deporte favorito es el rugby y aunque ya no juego ni entreno, aun asisto a los partidos que juegan mis amigos y estoy al tanto de equipos nacionales e internacionales.</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/U0YJGbPyyB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
              <p>Aqui se puede ver una semifinal del torneo nacional el año 2018 en la cual yo estuve con mis amigos de espectadores.</p>
      </div>
    </main>
)
  
}

export default Max;

