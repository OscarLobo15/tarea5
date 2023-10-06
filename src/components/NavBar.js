import React from "react";

function NavBar() {
  const Nav = ["Inicio", "Max", "Martín", "Oscar"];
  const Pag = ["#", "#", "#", "#"];

  const navItems = Nav.map((Indice, index) => (
    <div key={index} className="topnav">
      <a href={Pag[index]}>{Indice}</a>
    </div>
  ));

  return <div className="nav-bg">{navItems}</div>;
}

export default NavBar;