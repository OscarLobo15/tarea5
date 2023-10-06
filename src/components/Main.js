import React from "react";
import imagen1 from "../imagenes/Imagenes/Oscar.JPG";
import imagen2 from "../imagenes/Imagenes/Martin.jpeg";
import imagen3 from "../imagenes/Imagenes/Max.jpg";

function Main() {
  const integrantes = ['Oscar Lobo', 'Martín Dávila', 'Max Wallace'];
  const imagenes = [imagen1, imagen2, imagen3]; 
  const carrera = ["Estudiante Ingenieria Civil Informática e Industrial", "Estudiante Ingenieria Civil Industrial e Informática", "Estudiante Ingenieria Civil Informática"];

  return (
    <div className="subject">
      {integrantes.map((nombre, index) => (
        <div className="item" key={index}>
          <img className="imagen1" src={imagenes[index]} alt={`Image ${index + 1}`} />
          <h3>{nombre}</h3>
          <p>{(carrera[index])}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;