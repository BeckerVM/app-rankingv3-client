import { USER_LOADED, LOGIN_SUCCESS, LOGIN_FAILED, CLEAR_ERROR_LOGIN } from '../definitions/auth-definitions'

const initialState = {
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  error: []
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
    case LOGIN_FAILED:
      return {
        ...state,
        error: [...action.payload.error]
      }
    case CLEAR_ERROR_LOGIN:
      return {
        ...state,
        error: []
      }
    default:
      return state
  }
}

export default authReducer