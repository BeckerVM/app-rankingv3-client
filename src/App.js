import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PublicRoute from './components/routing/PublicRoute'
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './store/actions/auth-actions'
import store from './store/store'

//PAGINAS
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
//COMPONENTES
import LoadingBar from 'react-redux-loading-bar'

function App() {
  useEffect(() => {
    setAuthToken(localStorage.token)

    store.dispatch(loadUser())
  }, [])

  return (
    <>
      <LoadingBar
        style={{ backgroundColor: 'crimson', height: '3px' }}
        updateTime={100}
      />
      <Router>
        <Switch>
          <PublicRoute  path="/login" component={LoginPage} />
          <PublicRoute  path="/registrate" component={RegisterPage} />
          <Route path="/error" component={ErrorPage} />
        </Switch>
      </Router>
    </>  
  )
}

export default App
