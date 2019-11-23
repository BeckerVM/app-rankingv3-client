import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//PAGINAS
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
//COMPONENTES
import LoadingBar from 'react-redux-loading-bar'

function App() {
  return (
    <>
      <LoadingBar
        style={{ backgroundColor: 'crimson', height: '3px' }}
        updateTime={100}
      />
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/registrate" component={RegisterPage} />
        </Switch>
      </Router>
    </>  
  )
}

export default App
