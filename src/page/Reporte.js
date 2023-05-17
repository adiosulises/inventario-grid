import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
export function Reporte() {
  const [data, setData] = useState([]);

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
            <th>Producto</th>
            <th>Cantidad Actual</th>
            <th>Cantidad Necesaria</th>
          </tr>

          {data.map((item) => {
            if (Number(item.cantidad) <= Number(item.min)) {
              // Verificar si la cantidad está por debajo del mínimo
              return (
                <tr key={item.id} onClick={() => fetchPost()}>
                  <td>{item.nombre}</td>
                  <td>{item.cantidad}</td>
                  <td>{Number(item.max) - Number(item.cantidad)}</td>
                </tr>
              );
            } else {
              return null; // Si la cantidad no está por debajo del mínimo, no mostrar la fila
            }
          })}
        </tbody>
      </table>
    </>
  );
}
