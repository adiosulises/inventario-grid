import React from "react";
import { Datos } from "../components/Datos";
import { Tabla2 } from "../components/Tabla2";
import Header from "../header/header";


export function Vendibles() {
  
  return (

    <>
      <Header />
    <div>Vendibles</div>
  <Tabla2 list={Datos("vendibles")} ></Tabla2>
    </>
  )
  
}
