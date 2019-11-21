import React from 'react'

const Footer = function () {
  return (
    <footer className="flex justify-between p-6">
      <div>
        <a className="text-white font-bold ml-4 text-lg" href="#">Condiciones</a>
        <a className="text-white font-bold ml-4 text-lg" href="#">Privacidad</a>
        <a className="text-white font-bold ml-4 text-lg" href="#">Nosotros</a>
        <a className="text-white font-bold ml-4 text-lg" href="#">Ayuda</a>
      </div>
      <div className="text-white">Realizado por <span className="font-bold">ByM</span></div>
    </footer>
  )
}


export default Footer