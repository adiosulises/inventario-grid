//import React, {useEffect,useState} from "react";
import "../App.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    // <div className="contenedor">
    //   <div className="topnav">
    //     <Link to="/Home">HOME</Link>
    //     <Link to="/vendibles">VENDIBLES</Link>
    //     <Link to="/rentables">RENTABLES</Link>
    //     <Link to="/inmuebles">INMUEBLES</Link>
    //     <Link to="/dañados">DAÑADOS</Link>
    //     <Link to="/reporte">REPORTES</Link>
    //   </div>
    // </div>

    <nav class="navbar navbar-expand nav-fill bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/vendibles" className="nav-link active">
                Vendibles
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/rentables" className="nav-link">
                Rentables
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/inmuebles">
                Inmueble
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/dañados">
                Dañados
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/reportes">
                Reportes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
