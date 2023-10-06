import react from "react";


function Hero({ texto1, texto2 }) {
    return (
      <section className="hero">
        <div className="contenido-hero">
          <h2 className="nombre">{texto1}</h2>
          <h3 class="Estudios"> {texto2}</h3>

        </div>
      </section>
    );
  }
  
  export default Hero;