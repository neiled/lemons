import React, { Component, PropTypes } from 'react'

class Staff extends Component {
  render () {
    return (
      <tr>
        <td>
          {this.props.name}
        </td>
      </tr>
    )
  }
}

export default class StaffManager extends Component {
    render () {
      const { staff } = this.props

      return (
      <div>
        <h1>Staff Manager</h1>
        <table className='table table-striped'>
          <thead>
            <tr>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {staff.map(s =>
              <Staff
                key={s.id}
                name={s.name}
              />
            )}
          </tbody>
        </table>
      </div>
      )
    }
}

StaffManager.propTypes = {
  staff: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

Staff.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default StaffManager
