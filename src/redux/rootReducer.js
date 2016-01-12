import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
// import business from './modules/business'
import business_manager from './modules/business_manager'

export default combineReducers({
  // business,
  business_manager,
  router
})
