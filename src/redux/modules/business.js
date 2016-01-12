import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const STOCK_INCREMENT = 'STOCK_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export const incrementStock = createAction(STOCK_INCREMENT, (value = 1) => value)

// // This is a thunk, meaning it is a function that immediately
// // returns a function for lazy evaluation. It is incredibly useful for
// // creating async actions, especially when combined with redux-thunk!
// // NOTE: This is solely for demonstration purposes. In a real application,
// // you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// // reducer take care of this logic.
// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     setTimeout(() => {
//       dispatch(increment(getState().counter))
//     }, 1000)
//   }
// }

export const actions = {
  incrementStock
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [STOCK_INCREMENT]: (state, { payload }) => state + payload
}, 1)
// export default handleActions({
//   STOCK_INCREMENT: (state, action) => ({
//     counter: state.counter + action.payload
//   })
// }, {counter: 0})
