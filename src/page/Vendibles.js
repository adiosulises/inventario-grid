import React from "react";
import { Datos } from "../components/Datos";
import { Tabla2 } from "../components/Tabla2";



export function Vendibles() {
  
  return (

    <>
    <div>Vendibles</div>
  <Tabla2 list={Datos("vendibles")} ></Tabla2>
    </>
  )
  
}