import { createAction, handleActions } from 'redux-actions'
import uuid from 'node-uuid'

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

function generate_staff () {
  var results = []
  results = results.concat({id: uuid.v4(), name: 'Bob'})
  return results
}

export default handleActions({
  HIRE_STAFF: (state = generate_staff(), action) => {
    return state
  }
}, generate_staff())
