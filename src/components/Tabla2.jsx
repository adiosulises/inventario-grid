///tabla hecha para reutilizacion con 4 columnas
import React from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

export function Tabla2(props) {
  const list = props.list;
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRowClick = (item) => {
    setSelectedItem(item);
    console.log("Row clicked:", item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    console.log("modalVisible:", modalVisible);
  }, [modalVisible]);

  // () => handleRowClick(item)

  return (
    <>
      <Modal item={selectedItem} visible={modalVisible} handleClose={closeModal} />
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
