import React from 'react'

//COMPONENTES
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import LoginForm from '../../components/authentication/LoginForm/LoginForm'
//ESTILOS
import './styles.css'

const LoginPage = function () {
  return (
    <div className="b-login-page h-screen">
      <Header/>
      <div className="flex h-full flex-col justify-between">
        <LoginForm />
        <Footer />
      </div>
    </div>
  )
}

export default LoginPage