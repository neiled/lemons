import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
// import business from './modules/business'
import businesses from './modules/businesses'

export default combineReducers({
  // business,
  businesses,
  router
})
