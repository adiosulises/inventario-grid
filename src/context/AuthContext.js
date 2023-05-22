import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  ///datos y funciones tabla afectados
  const [todos, setTodos] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "afectados")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
      console.log(todos);
    });
  };
  
  const dts = () => {
    return todos
  };
   const sdts = (data) => {
     return setTodos;
   };
   const actualizarAfectados = () => {
     fetchPost();
   };
  //// end datos y funciones tabla afectados

  ///datos y funciones de vendibles
   const [Rentables, setRentables] = useState([]);

   const fetchRentables = async () => {
     await getDocs(collection(db, "Rentables")).then((querySnapshot) => {
       const newData = querySnapshot.docs.map((doc) => ({
         ...doc.data(),
         id: doc.id,
       }));
       setRentables(newData); 
     });
   };

   const datosVendibles = () => {
     return Rentables;
   };
   const actualizarRentables = () => {
     fetchRentables();
   };
  ////end datos y funciones de vendibles
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  const logout = () => signOut(auth);


  useEffect( () => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    fetchPost();
    fetchRentables();
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        login,
        user,
        logout,
        loading,
        dts,
        sdts,
        actualizarAfectados,
        datosVendibles,
        actualizarRentables
      }}
    >
      {children}
    </authContext.Provider>
  );
}
