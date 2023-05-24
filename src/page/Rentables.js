import React, { useState } from "react";
import { FormEntrada2 } from "../components/FormEntrada2";
import Modal from "react-bootstrap/Modal";
import { db } from "../firebase";
/*import { collection, addDoc } from "firebase/firestore";*/
import { updateDoc, doc } from "firebase/firestore";
/*import {
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";*/
import { useAuth } from "../context/AuthContext";

export function Rentables() {
  const { actualizarAfectados } = useAuth();
  const { datosRentables, actualizarRentables } = useAuth();
  //const [data, setData] = useState([]);

  const updateRentable = async (itemId, cambio, falla) => {
    try {
      const rentablebleRef = doc(db, "Rentables", itemId);
      await updateDoc(rentablebleRef, { afectado: cambio, falla: falla });
      console.log("Cantidad actualizada correctamente");
      actualizarRentables();
      actualizarAfectados();
      //cada que se actualize un dato se actualiza el array local
    } catch (error) {
      console.error("Error al actualizar la cantidad:", error);
    }
  };
  //estado para ver el modal
  const [show, setShow] = useState(false);
  //estado para seleccionar el item
  const [selectedItem, setSelectedItem] = useState(null);
  //

  //al presionar close en el modal
  const handleClose = () => {
    setSelectedItem(null);
    setShow(false);
  };

  //mostrar el modal
  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const list = datosRentables();
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

          {list
            .filter((item) => item.afectado === false)
            .map((item) => (
              <tr key={item.id} onClick={() => handleShow(item)}>
                <td>{item.nombre}</td>
                <td>{item["proveedores.nombre"]}</td>
                <td>${item.precio}</td>
                <td>{item.Cantidad}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem && selectedItem.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <FormEntrada2
              selectedItem={selectedItem}
              handleClose={handleClose}
              updateRentable={updateRentable}
            />
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
