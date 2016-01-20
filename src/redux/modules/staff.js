import { createAction, handleActions } from 'redux-actions'
import uuid from 'node-uuid'
import names from './names'

// ------------------------------------
// Constants
// ------------------------------------
export const HIRE_STAFF = 'HIRE_STAFF'

// ------------------------------------
// Actions
// ------------------------------------
export const hireStaff = createAction(HIRE_STAFF, (staff_id, business_id) => { return {staff_id: staff_id, business_id: business_id} })

export const actions = {
  hireStaff
}

function getRandomArbitrary (min, max) {
  var result = Math.random() * (max - min) + min
  return result
}

function getRandomName () {
  var name = names[Math.floor(Math.random() * names.length)]
  return name
}

function generate_staff () {
  var results = []
  for (var i = 0; i < 10; i++) {
    results = results.concat({
      id: uuid.v4(),
      name: getRandomName(),
      stockCostModifier: getRandomArbitrary(0.5, 2),
      sellPriceModifier: getRandomArbitrary(0.5, 2),
      maxStockModifier: getRandomArbitrary(0.5, 2)
    })
  }
  return results
}

export default handleActions({
  HIRE_STAFF: (state = generate_staff(), action) => {
    return state
  }
}, generate_staff())
