///tabla hecha para reutilizacion con 4 columnas
import React from "react";

export function Tabla2(props) {
  const list = props.list;

  const handleRowClick = (item) => {
    // Handle the row click event here
    console.log("Row clicked:", item);
  };

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

          {list.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item)}>
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
