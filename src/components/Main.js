import React from "react";

function Main({ nombre, imagen, carrera }) {
  return (
    
      <div className="item">
        <img className="imagen" src={imagen} alt="Imagen" />
        <h3>{nombre}</h3>
        <p>{carrera}</p>
      </div>
 
  );
}

export default Main;