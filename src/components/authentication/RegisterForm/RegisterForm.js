import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import './styles.css'

const RegisterForm = function() {
  const [showInputs, setShowInputs] = useState(false)

  const inputs = (
    <CSSTransition
      in={showInputs}
      timeout={300}
      classNames="b-inputs"
      unmountOnExit
    >
      <div className="mb-6">
        <input 
          className="w-full p-4 outline-none border-gray-300 border-b"
          type="email" placeholder="Correo electrónico"
        />
        <input 
          className="w-full p-4 outline-none border-gray-300 border-b"
          type="password" placeholder="Contraseña"
        />
        <input 
          className="w-full p-4 outline-none"
          type="text" placeholder="Nombre completo"
        />
      </div>
    </CSSTransition>
  )

  return (
    <form className="w-1/4 self-center b-login-form">
      <h1 className="text-5xl font-bold text-center text-white py-6">AppSinNombre</h1>
      <div className="text-xl">
        { inputs }
        { 
          !showInputs 
          && 
          <button className="bg-blue-500 hover:bg-blue-600 text-white w-full p-4 rounded font-bold mb-6"
            onClick={() => setShowInputs(true)}
          >
            Empezar
          </button>      
        }
        { showInputs ?
            <button className="bg-blue-500 hover:bg-blue-600 text-white w-full p-4 rounded font-bold mb-6">Regístrate</button> :
            <Link to="/login" className="text-center inline-block bg-white w-full p-4 rounded font-bold">Inicia sesión</Link>
        } 
      </div>
    </form>
  )
}

export default RegisterForm
