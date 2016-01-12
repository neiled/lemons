import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_BUSINESS = 'ADD_BUSINESS'

// ------------------------------------
// Actions
// ------------------------------------
export const addBusiness = createAction(ADD_BUSINESS, (value = 1) => value)

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
  addBusiness
}

// ------------------------------------
// Reducer
// ------------------------------------
// export default handleActions({
//   [ADD_BUSINESS]: (state, { payload }) => state + payload
// }, 1)
export default handleActions({
  ADD_BUSINESS: (state = [], action) => ([
    ...state,
    {name: 'test'}
  ])
}, [])
