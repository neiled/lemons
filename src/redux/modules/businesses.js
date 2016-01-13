import { createAction, handleActions } from 'redux-actions'
import uuid from 'node-uuid'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_BUSINESS = 'ADD_BUSINESS'
export const STOCK_INCREMENT = 'STOCK_INCREMENT'
export const STOCK_DECREMENT = 'STOCK_DECREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export const addBusiness = createAction(ADD_BUSINESS, (value = 1) => value)
export const incrementStock = createAction(STOCK_INCREMENT, (id, value, stock_cost) => { return {id: id, value: value, stock_cost: stock_cost} })
export const decrementStock = createAction(STOCK_DECREMENT, (id, value, stock_cost) => { return {id: id, value: value} })

export const actions = {
  addBusiness,
  incrementStock,
  decrementStock
}

function increment_stock (state, action) {
  if (state.id !== action.payload.id) {
    return state
  }
  return {
    ...state,
    amount: state.amount + action.payload.value
  }
}

function decrement_stock (state, action) {
  if (state.id !== action.payload.id) {
    return state
  }
  return {
    ...state,
    amount: state.amount - action.payload.value
  }
}

export default handleActions({
  ADD_BUSINESS: (state = [], action) => ([
    ...state,
    {
      id: uuid.v4(),
      name: action.payload.name,
      cost: action.payload.cost,
      stock_cost: action.payload.stock_cost,
      amount: 1
    }
  ]),
  STOCK_INCREMENT: (state = [], action) => {
    return state.map(b => increment_stock(b, action))
  },
  STOCK_DECREMENT: (state = [], action) => {
    return state.map(b => decrement_stock(b, action))
  }
}, [])
