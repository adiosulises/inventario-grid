import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FormEntrada2 } from "../components/FormEntrada2";
import Modal from "react-bootstrap/Modal";
import { db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { FormEntrada3 } from "../components/FormEntrada3";
export function Dañados() {
  const {
    dts,
    sdts,
    actualizarRentables,
    actualizarAfectados,
    datosInmuebles,
    actualizarInmuebles,
  } = useAuth();
  const list = dts();
  const inmuebles = datosInmuebles();
  console.log(list);

  const updateRentable = async (itemId, cambio) => {
    try {
      const rentablebleRef = doc(db, "Rentables", itemId);
      await updateDoc(rentablebleRef, { afectado: cambio });
      console.log("Cantidad actualizada correctamente");
      actualizarRentables();
      actualizarAfectados();
      //cada que se actualize un dato se actualiza el array local
    } catch (error) {
      console.error("Error al actualizar la cantidad:", error);
    }
  };

  const updateImnuebles = async (itemId, cambio) => {
    try {
      const rentablebleRef = doc(db, "inmuebles", itemId);
      await updateDoc(rentablebleRef, { afectado: cambio });
      console.log("inmueble actualizado");
      actualizarInmuebles();
      actualizarAfectados();
      //cada que se actualize un dato se actualiza el array local
    } catch (error) {
      console.error("Error al actualizar la cantidad:", error);
    }
  };
  //estado para ver el modal

  //estado para seleccionar el item
  const [selectedItem, setSelectedItem] = useState(null);
  //
  const [show, setShow] = useState(false);
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

  ////modal para inmuebles
  const [show2, setShow2] = useState(false);
  //al presionar close en el modal
  const handleClose2 = () => {
    setSelectedItem(null);
    setShow2(false);
  };

  //mostrar el modal
  const handleShow2 = (item) => {
    setSelectedItem(item);
    console.log("clic");
    setShow2(true);
    console.log(show2);
  };

  return (
    <>
      <>
        <h2 id="customers"> Tabla Rentables</h2>
        <table id="customers">
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>Falla</th>
              <th>Precio</th>
            </tr>

            {list
              .filter((item) => item.afectado === true)
              .map((item) => (
                <tr key={item.id} onClick={() => handleShow(item)}>
                  <td>{item.nombre}</td>
                  <td>{item.falla}</td>
                  <td>${item.precio}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <br></br>
        <h2 id="customers"> Tabla Inmuebles</h2>

        <table id="customers">
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>Falla</th>
              <th>Precio</th>
            </tr>

            {inmuebles
              .filter((item) => item.afectado === true)
              .map((item) => (
                <tr key={item.id} onClick={() => handleShow2(item)}>
                  <td>{item.nombre}</td>
                  <td>{item.falla}</td>
                  <td>${item.precio}</td>
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

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem && selectedItem.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedItem && (
              <FormEntrada3
                selectedItem={selectedItem}
                handleClose2={handleClose2}
                updateImnuebles={updateImnuebles}
              />
            )}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    </>
  );
}
