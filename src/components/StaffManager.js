import React, { Component, PropTypes } from 'react'

class Staff extends Component {
  render () {
    return (
      <tr>
        <td>
          {this.props.name}
        </td>
        <td>
          {this.props.stockCostModifier}
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
        <h2>(This is not used yet, check back soon for more features!)</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Stock Cost Modifier</td>
            </tr>
          </thead>
          <tbody>
            {staff.map(s =>
              <Staff
                key={s.id}
                name={s.name}
                stockCostModifier={s.stockCostModifier}
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
    name: PropTypes.string.isRequired,
    stockCostModifier: PropTypes.number.isRequired
  }).isRequired).isRequired
}

Staff.propTypes = {
  name: PropTypes.string.isRequired,
  stockCostModifier: PropTypes.number.isRequired
}

export default StaffManager
