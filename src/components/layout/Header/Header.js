import React from 'react'
import { Link } from 'react-router-dom'

//ESTILOS
import './styles.css'

const Header = function() {
  return (
    <header className="fixed top-0 left-0 w-full b-header px-6 flex items-center justify-between">
      <form className="bg-white text-xl rounded overflow-hidden w-1/3 flex">
        <i className="fas fa-search self-center px-2"></i>
        <input
          className="py-3 outline-none flex-1" 
          type="text" 
          placeholder="Buscar en AppSinNombre"
        />
      </form>
      <div>
        <Link 
          className="bg-white font-bold px-4 py-2 text-xl rounded" to="/login"
        >
          Inicia sesión
        </Link>
        <Link  
          to="/registrate"
          className="bg-white font-bold px-4 py-2 text-xl rounded ml-4"
        >
          Regístrate
        </Link>
      </div>
    </header>
  )
}

export default Header