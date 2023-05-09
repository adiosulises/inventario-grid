import React from "react";
import { Datos } from "../components/Datos";
export function Inmuebles() {
   const list = Datos("inmuebles");
   return (
     <>
       <div>Vendibles</div>

       <table id="customers">
         <tbody>
           <tr>
             <th>Nombre</th>
             <th>Descripcion</th>
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
                 <p>{item.descripcion}</p>
               </td>
               <td>{item.nombre.provedor}</td>
               <td>
                 <p>{item.precio}</p>
               </td>
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
