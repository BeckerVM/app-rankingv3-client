import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//PAGINAS
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  return (
    <Router>
      <Route path="/login" component={LoginPage} />
    </Router>
  )
}

export default App
