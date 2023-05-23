import React, { useState, useEffect } from "react";
//import { Datos } from "../components/Datos";
//import { Tabla2 } from "../../components/Tabla2";
//import { ModalBoton } from "../components/ModalBoton";

import Modal from  "react-bootstrap/Modal";
import { FormEntrada } from "../components/FormEntrada";
import { updateDoc, doc,addDoc } from "firebase/firestore";
import {  db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { FormAgregar } from "../components/FormAgregar";
export function Vendibles() {
  const [data, setData] = useState([]);

  const aggProducto = async (
    nombre,
    proveedor,
    precio,
    cantidad,
    max,
    min,
    categoria
  ) => {
    try {
      const collectionRef = collection(db, "vendibles");
      await addDoc(collectionRef, {
        nombre: nombre,
        proveedor: proveedor,
        precio: precio,
        cantidad: cantidad,
        max: max,
        min: min,
        categoria: categoria,
      });

      console.log("Nuevo documento agregado correctamente");
      fetchPost();
    } catch (error) {
      console.error("Error al agregar el nuevo documento:", error);
    }
  };

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


  const [show2, setShow2] = useState(false);

  const handleClose2 = () => {
    setShow2(false);
  };

  //mostrar el modal
  const handleShow2 = () => {
    setShow2(true);
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
        <div className="mt-3 col-6">
        <button
          className="btn btn-primary btn-block w-20"
          onClick={() => handleShow2()}
        >
          Nuevo producto
        </button>
        </div>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem && selectedItem.nombre}</Modal.Title>
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

      {/*modal para añadir nuevo item*/}
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>Nuevo Producto</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAgregar aggProducto={aggProducto} handleClose2={handleClose2} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
