import React from "react";
import { Datos } from "../components/Datos";
export function Dañados() {
  const list = Datos("afectados");
  console.log(list);
  return (
    <>
      <table id="customers">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Reporte</th>
            <th>Nombre usuario</th>
          </tr>

          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.item}</td>
              <td>{item.reporte}</td>
              <td>{item["usuarios.nombre"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
