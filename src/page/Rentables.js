import React from "react";
import { Datos } from "../components/Datos";


export function Rentables() {
  const list = Datos("Rentables");
  return (
    <>
      <table id="customers">
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Provedor</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>

          {list.map((item) => (
            <tr key={item.id}>
              <td>
                {item.nombre}
              </td>

              <td>
                {item.descripcion}
              </td>
              <td>
                {item.nombre.provedor}
              </td>
              <td>
                ${item.precio}
              </td>
              <td>
                {item.cantidad}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
