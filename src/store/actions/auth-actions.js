import request from '../../api/request'
import { USER_LOADED, LOGIN_SUCCESS, LOGIN_FAILED, CLEAR_ERROR_LOGIN } from '../definitions/auth-definitions'
import setAuthToken from '../../utils/setAuthToken'

export const loginUser = ({ email, password, rol }, history) => async distpatch => {
  try {
    const response = await request.post(`auth/login/${rol}`, { email, password })

    distpatch({ 
      type: LOGIN_SUCCESS, 
      payload: {
        user: response.data.user,
        isAuthenticated: response.data.isAuthenticated,
        token: response.data.token
      }
    })

    history.push('/error')
    
    distpatch({ type: CLEAR_ERROR_LOGIN })
  } catch (error) {
    distpatch({
      type: LOGIN_FAILED,
      payload: { error: error.response.data.error }
    })

    setTimeout(() => {
      history.push('/ups')

      distpatch({ type: CLEAR_ERROR_LOGIN })
    }, 2000)
  }
}


export const loadUser = () => async distpatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const response = await request.get('auth/protected')

    distpatch({
      type: USER_LOADED,
      payload: {
        user: response.data.user,
        isAuthenticated: response.data.isAuthenticated
      }
    })
  } catch (error) {
    console.log(error)
  }
}