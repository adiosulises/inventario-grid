import React, {useState} from 'react';
//import {  signInWithEmailAndPassword   } from 'firebase/auth';
//import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
//import login from '../login';
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //usamos el login del context
    const { login} = useAuth();
     const [error, setError] = useState("");

    const onLogin = (e) => {
        setError("");
        e.preventDefault();
             login(email,password)
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
}

export default Login