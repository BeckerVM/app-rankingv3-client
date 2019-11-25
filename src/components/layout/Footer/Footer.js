import React from 'react'

const Footer = function () {
  return (
    <footer className="flex justify-between p-6">
      <div>
        <a className="text-white font-bold ml-4 text-lg" href="/condiciones">Condiciones</a>
        <a className="text-white font-bold ml-4 text-lg" href="/privacidad">Privacidad</a>
        <a className="text-white font-bold ml-4 text-lg" href="/nosotros">Nosotros</a>
        <a className="text-white font-bold ml-4 text-lg" href="/ayuda">Ayuda</a>
      </div>
      <div className="text-white">Realizado por <span className="font-bold">ByM</span></div>
    </footer>
  )
}


export default Footer