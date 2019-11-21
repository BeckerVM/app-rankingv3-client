import React from 'react'

//COMPONENTES
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import RegisterForm from '../../components/authentication/RegisterForm/RegisterForm'
//ESTILOS
import './styles.css'

const RegisterPage = function () {
  return (
    <div className="b-register-page bg-red-700 h-screen">
      <Header/>
      <div className="flex h-full flex-col justify-between">
        <RegisterForm />
        <Footer />
      </div>
    </div>
  )
}

export default RegisterPage