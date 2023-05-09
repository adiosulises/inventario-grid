import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar.jsx';

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
        <div className="n">
          <Navbar></Navbar>

          <div className="logout-button ">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <p>Welcome Home</p>
      </>
    );
}

export default Home;