import { combineReducers } from 'redux'
//REDUCTORES
import { loadingBarReducer } from 'react-redux-loading-bar'
import authReducer from './auth-reducer'

export default combineReducers({
  loadingBar: loadingBarReducer,
  auth: authReducer
})
