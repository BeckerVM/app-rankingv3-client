import React from 'react'
import { connect } from 'react-redux'

import './styles.css'

import { loginUser } from '../../../store/actions/auth-actions'

const LoginForm = function({ loginUser }) {

  const sendDataLogin = (e) => {
    e.preventDefault()
    loginUser({ email: 'beiker2203@gmail.com', password: '12345', rol: 'client' })
  }

  return (
    <form className="w-1/4 self-center b-login-form">
      <h1 className="text-5xl font-bold text-center text-white py-6">AppSinNombre</h1>
      <div className="text-xl">
        <input 
          className="w-full rounded p-4 outline-none mb-6"
          type="email" placeholder="Correo electrónico"
        />
        <div className="b-login-alert text-center text-white p-4 mb-6">¡Ups! Se ha producido un error. Vuelve a intentarlo.</div>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white w-full p-4 rounded font-bold"
          onClick={(e) => sendDataLogin(e)}
        >
          Siguiente
        </button>
      </div>
    </form>
  )
}

export default connect(null, {
  loginUser
})(LoginForm)
