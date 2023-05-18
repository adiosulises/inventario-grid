import React, { useState, useEffect } from "react";
//import { Datos } from "../components/Datos";
//import { Tabla2 } from "../../components/Tabla2";
//import { ModalBoton } from "../components/ModalBoton";

import Modal from  "react-bootstrap/Modal";
import { FormEntrada } from "../components/FormEntrada";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export function Vendibles() {
  const [data, setData] = useState([]);

  //funcion para actualizar los datos del form
  const updateCantidad = async (itemId, newCantidad) => {
    try {
      const vendibleRef = doc(db, "vendibles", itemId);
      await updateDoc(vendibleRef, { cantidad: newCantidad });
      console.log("Cantidad actualizada correctamente");
      //cada que se actualize un dato se actualiza el array local
      const updatedData = data.map((item) => {
        if (item.id === itemId) {
          return { ...item, cantidad: newCantidad };
        }
        return item;
      });
      setData(updatedData);
    } catch (error) {
      console.error("Error al actualizar la cantidad:", error);
    }
  };
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

  const fetchPost = async () => {
    await getDocs(collection(db, "vendibles")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

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

          {data.map((item) => (
            <tr key={item.id} onClick={() => handleShow(item)}>
              <td>
                <p>{item.nombre}</p>
              </td>

              <td>
                <p>{item["proveedor"]}</p>
              </td>
              <td>${item.precio}</td>
              <td>
                <p>{item.cantidad}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem && (selectedItem.nombre)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <FormEntrada
              selectedItem={selectedItem}
              handleClose={handleClose}
              updateCantidad={updateCantidad}
            />
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
