
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import React, { useEffect, useState } from "react";


export function Datos(p) {
    const [todos, setTodos] = useState([]);

    const fetchPost = async () => {
      await getDocs(collection(db, p)).then((querySnapshot) => {
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
  return todos;
}