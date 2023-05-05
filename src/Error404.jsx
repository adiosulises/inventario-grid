import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function Error404() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error 404</h1>
      <p>{error.statusText || error.message}</p>
      <Link to={'/'}>Volver</Link>
    </div> 
  )
}
