import React from "react";
import { useAuth } from "../context/AuthContext";
export function Dañados() {
  
  const {dts,sdts}= useAuth();
  const list = dts()
  console.log(list)
  return (
    <>
      <table id="customers">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Falla</th>
            <th>Nombre usuario</th>
          </tr>

          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.item}</td>
              <td>{item.reporte}</td>
              <td>{item.usuarios_nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
