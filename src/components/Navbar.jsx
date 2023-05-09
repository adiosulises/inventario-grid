//import React, {useEffect,useState} from "react";
import "../App.css";
import { Link } from "react-router-dom";



export function Navbar() {
  return (
    <div className="contenedor">
      <div className="topnav">
        <Link to="/Home">HOME</Link>
        <Link to="/vendibles">VENDIBLES</Link>
        <Link to="/rentables">RENTABLES</Link>
        <Link to="/inmuebles">INMUEBLES</Link>
        <Link to="/dañados">DAÑADOS</Link>
        <Link to="/reporte">REPORTES</Link>
      </div>
    </div>
    
  );
}
