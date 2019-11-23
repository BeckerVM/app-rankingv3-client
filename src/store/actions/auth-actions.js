import request from '../../api/request'
import { SET_USER } from '../definitions/auth-definitions'

export const loginUser = ({ email, password, rol }) => async distpatch => {
  try {
    console.log(email, password, rol)
    const response = await request.post(`auth/login/${rol}`, { email, password })
    console.log(response.data)

    distpatch({ 
      type: SET_USER, 
      payload: {
        user: {
          id: 1,
          names: 'Becker Antonello', 
          rol: 'client'
        },
        isAuthenticated: response.data.isAuthenticated
      }
    })
  } catch (error) {
    console.log(error.data)
  }
}
