import { USER_LOADED, LOGIN_SUCCESS } from '../definitions/auth-definitions'

const initialState = {
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem('token')
}

const authReducer = function(state = initialState, action) {
  switch(action.type) {
    case USER_LOADED:
      return {
        ...state,
        ...action.payload
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)

      return {
        ...state,
        ...action.payload
        //user: { ...action.payload.user },
        //isAuthenticated: action.payload.isAuthenticated
      }
    default:
      return state
  }
}

export default authReducer