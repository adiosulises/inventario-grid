import React from "react";
import { Datos } from "../components/Datos";
import { Tabla2 } from "../components/Tabla2";
import { ModalBoton } from "../components/ModalBoton";

export function Vendibles() {

  return (

    <>
      <Tabla2 list={Datos("vendibles")} ></Tabla2>
      <div className="m-3">
        <ModalBoton></ModalBoton>
      </div>

    </>
  )

}
