import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
    errorElement: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/Tabla",
    element: <Tabla />,
  },
  {
    path: "/Home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/vendibles",

    element: (
      <ProtectedRoute>
        <Vendibles />
      </ProtectedRoute>
    ),
  },
  {
    path: "/rentables",
    element: (
      <ProtectedRoute>
        <Rentables />
      </ProtectedRoute>
    ),
  },
  {
    path: "/inmuebles",
    element: (
      <ProtectedRoute>
        <Inmuebles />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dañados",
    element: (
      <ProtectedRoute>
        <Dañados />
      </ProtectedRoute>
    ),
  },
  {
    path: "/reporte",
    element: (
      <ProtectedRoute>
        <Reporte/>
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
