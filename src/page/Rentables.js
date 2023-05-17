import React from "react";
import { Datos } from "../components/Datos";

export function Rentables() {
  const l = Datos("Rentables");
  return (
    <>
      <table id="customers">
        <tbody>
          <tr>
            <th>Nombre</th>

            <th>Proveedor</th>

            <th>Precio</th>
            <th>Cantidad</th>
          </tr>

          {l.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>

              <td>{item["proveedores.nombre"]}</td>
              <td>{item.precio}</td>
              <td>{item.Cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
