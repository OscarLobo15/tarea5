import Hero from "./Hero";
import Main from "./Main";
import imagen1 from "../imagenes/Imagenes/Oscar.JPG";
import imagen2 from "../imagenes/Imagenes/Martin.jpeg";
import imagen3 from "../imagenes/Imagenes/Max.jpg";
import "../CSS/style.css";

function Inicio(){

    return(
        <div className="App">
            < Hero 
                texto1="Grupo Los Mamaos"
                texto2=""
            />
            <main className="content shadow">
                <div className="subject">
                    
                    <Main
                        nombre="Oscar Lobo"
                        imagen={imagen1}
                        carrera="Estudiante Ingeniería Civil Informática e Industrial"
                    />
                    <Main
                        nombre="Martín Dávila"
                        imagen={imagen2}
                        carrera="Estudiante Ingeniería Civil Industrial e Informática"
                    />
                    <Main
                        nombre="Max Wallace"
                        imagen={imagen3}
                        carrera="Estudiante Ingeniería Civil Informática"
                    />
                </div>
            </main> 
        </div>

    );
}

export default Inicio;