import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import business from './modules/business'

export default combineReducers({
  counter,
  business,
  router
})
