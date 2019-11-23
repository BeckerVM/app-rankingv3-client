import { SET_USER } from '../definitions/auth-definitions'

const initialState = {
  user: null,
  isAuthenticated: false
}

const authReducer = function(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return {
        user: { ...action.payload.user },
        isAuthenticated: action.payload.isAuthenticated
      }
    default:
      return state
  }
}

export default authReducer