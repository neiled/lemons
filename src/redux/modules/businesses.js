import { createAction, handleActions } from 'redux-actions'
import uuid from 'node-uuid'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_BUSINESS = 'ADD_BUSINESS'
export const STOCK_INCREMENT = 'STOCK_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export const addBusiness = createAction(ADD_BUSINESS, (value = 1) => value)
export const incrementStock = createAction(STOCK_INCREMENT, (id, value) => { return {id: id, value: value} })

export const actions = {
  addBusiness,
  incrementStock
}

// ------------------------------------
// Reducer
// ------------------------------------
// export default handleActions({
//   [ADD_BUSINESS]: (state, { payload }) => state + payload
// }, 1)

function increment_stock (state, action) {
  if (state.id !== action.payload.id) {
    return state
  }
  return {
    ...state,
    amount: state.amount + action.payload.value
  }
}
export default handleActions({
  ADD_BUSINESS: (state = [], action) => ([
    ...state,
    {
      id: uuid.v4(),
      name: action.payload,
      amount: 1
    }
  ]),
  STOCK_INCREMENT: (state = [], action) => {
    return state.map(b => increment_stock(b, action))
  }
}, [])

// export default handleActions({
//   [STOCK_INCREMENT]: (state, { payload }) => state + payload
// }, 1)
