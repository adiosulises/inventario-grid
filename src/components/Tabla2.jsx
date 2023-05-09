
///tabla hecha para reutilizacion con 4 columnas
import React from "react";

export function Tabla2(props) {
  const list=props.list
  return (
    <>
      <table id="customers">
        <tbody>
          <tr>
            <th>Nombre</th>
            <th>Provedor</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>

          {list.map((item) => (
            <tr key={item.id}>
              <td>
                <p>{item.nombre}</p>
              </td>

              <td>
                <p>{item["proveedores.nombre"]}</p>
              </td>
              <td>{item.precio}</td>
              <td>
                <p>{item.cantidad}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
