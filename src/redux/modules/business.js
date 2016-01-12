import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const STOCK_INCREMENT = 'STOCK_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export const incrementStock = createAction(STOCK_INCREMENT, (value = 1) => value)

export const actions = {
  incrementStock
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [STOCK_INCREMENT]: (state, { payload }) => state + payload
}, 1)
