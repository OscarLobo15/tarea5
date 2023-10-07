import React from "react";
import {NavLink} from "react-router-dom";


function NavBar() {
  return(
    <div class="nav-bg">
    <div class="topnav">
        <NavLink to ="/inicio">Inicio</NavLink>
        <NavLink to ="/max">Max</NavLink>
        <NavLink to ="/martin">Martin</NavLink>
        <NavLink to ="/oscar">Oscar</NavLink>
    </div>
</div>

  );
}


export default NavBar;