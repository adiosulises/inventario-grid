import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar.jsx';
import Tabs from '../components/Tabs.jsx';
import {ModalBoton}  from "../components/ModalBoton.jsx"

export const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      console.log("Signed out successfully")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>
      <div className='row height-100'>
        <div className="col-2 text-center m-3">
          <p>Datos usuario</p>
          <div className='d-grid'>
            <button type='button' className='btn btn-secondary btn-block' onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <div className="col m-0 p-0">
          <Tabs></Tabs>
        </div>
        
      </div>
    </>
  );
}

export default Home;