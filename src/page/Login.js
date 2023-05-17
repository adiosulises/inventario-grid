import React, { useState } from 'react';
//import {  signInWithEmailAndPassword   } from 'firebase/auth';
//import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
//import login from '../login';
import { useAuth } from "../context/AuthContext";
import '../App.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //usamos el login del context
    const { login} = useAuth();
    const [error, setError] = useState("");
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );

    const onLogin = (e) => {
        setError("");
        e.preventDefault();
        login(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                navigate("/home")
                console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setError(errorMessage)
            });
        
        
      
    }
    const checkAuth = () => {

    }

    return (
        <>
            <main onLoad={checkAuth}>
                <section>
                    <div className='custom-w text-center mt-4'>
                        <h1> Boulder Grid </h1>

                        <form>
                            <div className='mb-3'>
                                <input className='form-control'
                                       id="email-address"
                                       name="email"
                                       type="email"
                                       required
                                       placeholder="Correo"
                                       onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='mb-3'>
                                <input className='form-control'
                                       id="password"
                                       name="password"
                                       type="password"
                                       required
                                       placeholder="Contraseña"
                                       onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className='d-grid'>
                                <button type='button' class='btn btn-primary btn-block'
                                        onClick={onLogin}
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login