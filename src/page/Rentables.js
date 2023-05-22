import React ,{useState} from "react";
import { FormEntrada2 } from "../components/FormEntrada2";
import Modal from "react-bootstrap/Modal";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { updateDoc, doc } from "firebase/firestore";
import {
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";


export function Rentables() {
    const { actualizarAfectados } = useAuth();
    const { datosVendibles, actualizarRentables } = useAuth();
  //const [data, setData] = useState([]);
   const add= async (nombre,ref,check,usuario) => {
    try {
      
      const q = query(collection(db, "afectados"), where("idr", "==", ref));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        console.log("El item existe en al menos un documento");
      } else {
        console.log("El item no existe en ningún documento");
        
        const collectionRef = collection(db, "afectados");
        await addDoc(collectionRef, {
          idr: ref,
          afectado: check,
          item: nombre,
          reporte: "le falla la banda",
          usuarios_nombre: usuario,
        });
        actualizarAfectados();
        updateRentable(selectedItem.id, check);
        console.log("Nuevo documento agregado correctamente");


      }
      
      
      
      
    } catch (error) {
      console.error("Error al agregar el nuevo documento:", error);
    }
       
   };
   const delet = async (id) => {
     try {
       // Realizar una consulta para obtener los documentos que coinciden con el campo "item"
       const q = query(
         collection(db, "afectados"),
         where("idr", "==", id)
       );
       const querySnapshot = await getDocs(q);

       // Eliminar los documentos obtenidos de la consulta
       querySnapshot.forEach(async (doc) => {
         await deleteDoc(doc.ref);
       });
       actualizarAfectados();
       console.log("Documentos eliminados correctamente");
     } catch (error) {
       console.error("Error al eliminar los documentos:", error);
     }
   };

  

   const updateRentable = async (itemId, cambio) => {
     try {
       const rentablebleRef = doc(db, "Rentables", itemId);
       await updateDoc(rentablebleRef, { afectado: cambio });
       console.log("Cantidad actualizada correctamente");
       actualizarRentables();
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



  const list = datosVendibles();
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
              add={add}
              updateRentable={updateRentable}
              delet={delet}
             
            />
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
