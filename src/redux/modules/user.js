import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const CASH_SPEND = 'CASH_SPEND'
export const CASH_INCREASE = 'CASH_INCREASE'

// ------------------------------------
// Actions
// ------------------------------------
export const cashSpend = createAction(CASH_SPEND, (value) => value)
export const cashIncrease = createAction(CASH_INCREASE)

export const actions = {
  cashSpend,
  cashIncrease
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [CASH_SPEND]: (state, { payload }) => Object.assign({}, state, {
    cash: state.cash - payload.amount
  }),
  [CASH_INCREASE]: (state, { payload }) => Object.assign({}, state, {
    cash: state.cash + payload
  }),
  ADD_BUSINESS: (state = {cash: 1000}, action) => Object.assign({}, state, {
    cash: state.cash - action.payload.cost,
    plots_available: state.plots_available - 1
  }),
  STOCK_INCREMENT: (state, action) => Object.assign({}, state, {
    cash: state.cash - (action.payload.stock_cost * action.payload.value)
  }),
  SELL_STOCK: (state, action) => Object.assign({}, state, {
    cash: state.cash + action.payload.sale_price,
    max_cash: state.cash > state.max_cash ? state.cash : state.max_cash
  }),
  BUY_PLOT: (state, action) => Object.assign({}, state, {
    plots_available: state.plots_available + 1,
    cash: state.cash - action.payload
  }),
  SELL_BUSINESS: (state = [], action) => Object.assign({}, state, {
    plots_available: state.plots_available + 1
  })
}, {cash: 60, max_cash: 60, plots_available: 1})
