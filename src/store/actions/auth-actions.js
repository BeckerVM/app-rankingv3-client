import request from '../../api/request'
import { USER_LOADED, LOGIN_SUCCESS, LOGIN_FAILED } from '../definitions/auth-definitions'
import setAuthToken from '../../utils/setAuthToken'

export const loginUser = ({ email, password, rol }) => async distpatch => {
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
  } catch (error) {
    console.log(error.response.data)
    distpatch({
      type: LOGIN_FAILED,
      payload: { error: error.response.data.error }
    })
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