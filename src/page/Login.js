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
<<<<<<< HEAD
    const { login} = useAuth();
     const [error, setError] = useState("");
=======
    const { login } = useAuth();
    //const [error, setError] = useState("");
>>>>>>> aab2b88fc9ea2d957a7c0acd0b0e4e21685024b6

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

    return (
<<<<<<< HEAD
      <>
        <main>
          <section>
            <div>
              <p> FocusApp </p>
              <form>
                <div>
                  <label htmlFor="email-address">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  <button onClick={onLogin}>Login</button>
                </div>
              </form>
              {error && <p>{error}</p>}

              <p className="text-sm text-white text-center">
                No account yet? <NavLink to="/signup">Sign up</NavLink>
              </p>
            </div>
          </section>
        </main>
      </>
    );
=======
        <>
            <main>
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
>>>>>>> aab2b88fc9ea2d957a7c0acd0b0e4e21685024b6
}

export default Login