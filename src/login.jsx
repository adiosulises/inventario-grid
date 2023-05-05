import React from 'react'

export default function login() {
  return (
    <div>
        <h1>Boulder Grid</h1>
        <input type="text" placeholder='Usuario' autoFocus  />
        <br />
        <br />
        <input type="password" placeholder='Contraseña' />
        <br />
        <br />
        <button>Login</button>
    </div>
  )
}
