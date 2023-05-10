import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar.jsx'
import '../App.css';;

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
      <div className='row'>
        <div className="col-2 m-3 text-center">
          <p>Datos usuario</p>
          <div className='d-grid'>
            <button type='button' className='btn btn-secondary btn-block' onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <div className="col">
          <Navbar></Navbar>
        </div>
      </div>
    </>
  );
}

export default Home;