import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error404 from './Error404';
import Dashboard from './dashboard';
import Login from './login';

const router = createBrowserRouter([
  {
    path: '/',
    action: () => {
      router.navigate('/login')
    },
    errorElement: <Error404 />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
