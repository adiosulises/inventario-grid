import React from "react";
import { useState } from "react";
import { Dañados } from "../page/Dañados";
import { Rentables } from "../page/Rentables";
import { Vendibles } from "../page/Vendibles";
import { Inmuebles } from "../page/Inmuebles";
import { Reporte } from "../page/Reporte";

export default function Tabs() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <>
      <div className="m-3">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item" onClick={() => updateToggle(1)}>
            <a className={toggle === 1? "nav-link active" : "nav-link"}>Vendibles</a>
          </li>
          <li class="nav-item" onClick={() => updateToggle(2)}>
            <a className={toggle === 2? "nav-link active" : "nav-link"}>Rentables</a>
          </li>
          <li class="nav-item" onClick={() => updateToggle(3)}>
            <a className={toggle === 3? "nav-link active" : "nav-link"}>Inmueble</a>
          </li>
          <li class="nav-item" onClick={() => updateToggle(4)}>
            <a className={toggle === 4? "nav-link active" : "nav-link"}>Dañados</a>
          </li>
          <li class="nav-item" onClick={() => updateToggle(5)}>
            <a className={toggle === 5? "nav-link active" : "nav-link"}>Reportes</a>
          </li>
        </ul>
      </div>

      <div className={toggle === 1 ? "show" : "hide"}>
        <Vendibles></Vendibles>
      </div>
      <div className={toggle === 2 ? "show" : "hide"}>
        <Rentables></Rentables>
      </div>
      <div className={toggle === 3 ? "show" : "hide"}>
        <Inmuebles></Inmuebles>
      </div>
      <div className={toggle === 4 ? "show" : "hide"}>
        <Dañados></Dañados>
      </div>
      <div className={toggle === 5 ? "show" : "hide"}>
        <Reporte></Reporte>
      </div>
    </>
  );
}
