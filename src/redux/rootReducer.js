import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import user from './modules/user'
import businesses from './modules/businesses'

export default combineReducers({
  user,
  businesses,
  router
})
