import Hero from "./Hero";
import Main from "./Main";
import "../CSS/style1.css";
import imagen4 from "../imagenes/Imagenes/Basket.JPG";
import imagen5 from "../imagenes/Imagenes/Play.jpeg";
import imagen6 from "../imagenes/Imagenes/Pololi.JPG";
import "../CSS/style1.css";

function Oscar() {
  return (
    <div className="App">
      < Hero 
        texto1="Oscar Lobo D"
        texto2= "Estudiante Ingenieria civil Informática e Industrial"
      />
      <main className="content shadow">
        <div className="subject">
        
          <Main
            nombre="1. Jugar Basketball"
            imagen={imagen4}
            carrera="Me gusta jugar Basketball, entreno de lunes a viernes por el club Manquehue"
          />
          <Main
            nombre="2. Jugar Play con amigos"
            imagen={imagen5}
            carrera="Me gusta jugar Play con mis amigos, en los momentos libres"
          />
          <Main
            nombre="3. Pasar tiempo con mi polola"
            imagen={imagen6}
            carrera="Estoy a diario con mi polola"
          />
        </div>
      </main>

      
    </div>
  );
}

export default Oscar;
