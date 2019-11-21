import React from 'react'

import './styles.css'

const LoginForm = function() {
  return (
    <form className="w-1/4 self-center b-login-form">
      <h1 className="text-5xl font-bold text-center text-white py-6">AppSinNombre</h1>
      <div className="text-xl">
        <input 
          className="w-full rounded p-4 outline-none mb-6"
          type="email" placeholder="Correo electrónico"
        />
        <div className="b-login-alert text-center text-white p-4 mb-6">¡Ups! Se ha producido un error. Vuelve a intentarlo.</div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white w-full p-4 rounded font-bold">Siguiente</button>
      </div>
    </form>
  )
}

export default LoginForm
