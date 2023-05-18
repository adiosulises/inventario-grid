import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Autosuggest from 'react-autosuggest';
import { useState } from 'react';


import Error404 from './Error404';
import Dashboard from './dashboard';
import Login from './page/Login';
import { Tabla } from './components/Tabla';
import { Navigate } from 'react-router-dom';
import { ProtectedRoute } from './page/ProtectedRoute';
import {Home} from "./page/Home"
import { Vendibles } from './page/Vendibles';
import { AuthProvider } from "./context/AuthContext";
import {Rentables} from "./page/Rentables"
import {Inmuebles} from "./page/Inmuebles"
import { Dañados } from './page/Dañados';
import { Reporte} from "./page/Reporte";
import Tabs from './components/Tabs.jsx';
import { ModalBoton } from './components/ModalBoton';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
    errorElement: <Error404 />,
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
