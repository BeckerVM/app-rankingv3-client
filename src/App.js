import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//PAGINAS
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/registrate" component={RegisterPage} />
      </Switch>
    </Router>
  )
}

export default App
