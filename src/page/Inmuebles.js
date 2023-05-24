import { FormEntrada3 } from "../components/FormEntrada3";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { updateDoc, doc } from "firebase/firestore";
export function Inmuebles() {
  const { datosInmuebles, actualizarInmuebles } = useAuth();
  const list = datosInmuebles();
  //estado para ver el modal
  const [show, setShow] = useState(false);
  //estado para seleccionar el item
  const [selectedItem, setSelectedItem] = useState(null);
  //

  //al precionar close en el modal
  const handleClose = () => {
    setSelectedItem(null);
    setShow(false);
  };

  //mostrar el modal
  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const updateImnuebles = async (itemId, cambio, falla) => {
    try {
      const rentablebleRef = doc(db, "inmuebles", itemId);
      await updateDoc(rentablebleRef, { afectado: cambio, falla: falla});
      actualizarInmuebles();
      console.log("se actualizo el campo afectado");
      //actualizarRentables();
      //cada que se actualize un dato se actualiza el array local
    } catch (error) {
      console.error("Error al actualizar la cantidad:", error);
    }
  };

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

          {list
            .filter((item) => item.afectado === false)
            .map((item) => (
              <tr key={item.id} onClick={() => handleShow(item)}>
                <td>{item.nombre}</td>
                <td>{item.descripcion}</td>
                <td>{item["proveedores.nombre"]}</td>
                <td>${item.precio}</td>
                <td>{item.cantidad}</td>
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
            <FormEntrada3
              selectedItem={selectedItem}
              handleClose2={handleClose}
              updateImnuebles={updateImnuebles}
            />
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
