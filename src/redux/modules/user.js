import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const CASH_SPEND = 'CASH_SPEND'

// ------------------------------------
// Actions
// ------------------------------------
export const cashSpend = createAction(CASH_SPEND, (value) => value)

export const actions = {
  cashSpend
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [CASH_SPEND]: (state, { payload }) => Object.assign({}, state, {
    cash: state.cash - payload.amount
  }),
  ADD_BUSINESS: (state = {cash: 1000}, action) => Object.assign({}, state, {
    cash: state.cash - action.payload.cost
  }),
  STOCK_INCREMENT: (state, action) => Object.assign({}, state, {
    cash: state.cash - (action.payload.stock_cost * action.payload.value)
  }),
  SELL_BUSINESS: (state = [], action) => Object.assign({}, state, {
    cash: state.cash + action.payload.sellValue,
    max_cash: state.cash > state.max_cash ? state.cash : state.max_cash
  }),
  SELL_STOCK: (state, action) => Object.assign({}, state, {
    cash: state.cash + action.payload.sale_price,
    max_cash: state.cash > state.max_cash ? state.cash : state.max_cash
  })
}, {cash: 60, max_cash: 60})
