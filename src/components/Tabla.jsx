
import { Navbar } from "./Navbar";
//import ListaPublicaciones from "./Publicaciones";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import React, { useEffect, useState } from "react";
//const list = ListaPublicaciones;

export function Tabla() {

   const [todos, setTodos] = useState([]);

   const fetchPost = async () => {
     await getDocs(collection(db, "vendibles")).then((querySnapshot) => {
       const newData = querySnapshot.docs.map((doc) => ({
         ...doc.data(),
         id: doc.id,
       }));
       setTodos(newData);
       console.log(todos);
     });
   };

   useEffect(() => {
     fetchPost();
   }, []);
  

  
   return (
     <>
       <Navbar></Navbar>
       <table id="customers">
         <tbody>
           <tr>
             <th>Nombre</th>
             <th>Descripcion</th>
             <th>Precio</th>
             <th>Cantidad</th>
           </tr>

           {todos.map((item) => (
             <tr key={item.id}>
               <td>
                 <p>{item.nombre}</p>
               </td>

               <td><p>{item.nombre.provedor}</p></td>
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
