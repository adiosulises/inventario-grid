import React from "react";
import { Datos } from "../components/Datos";
export function Dañados() {
 const list = Datos("afectados");
 console.log(list)
 return (
   <>
     <div>Dañados</div>

     <table id="customers">
       <tbody>
         <tr>
           <th>Item</th>
           <th>Reporte</th>
           <th>Nombre usuario</th>
         </tr>

         {list.map((item) => (
           <tr key={item.id}>
             <td>
               <p>{item.item}</p>
             </td>

             <td>
               <p>{item.reporte}</p>
             </td>
             <td>{item["usuarios.nombre"]}</td>
           </tr>
         ))}
       </tbody>
     </table>
   </>
 );
}
