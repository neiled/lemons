import React, { Component, PropTypes } from 'react'
import classname from 'classnames'

class Staff extends Component {
  render () {
    return (
      <tr>
        <td>
          {this.props.name}
        </td>
        <td className={classname({'success': this.props.stockCostModifier <= 1, 'danger': this.props.stockCostModifier > 1})}> {this.props.stockCostModifier.toFixed(2)} </td>
        <td className={classname({'success': this.props.maxStockModifier >= 1, 'danger': this.props.maxStockModifier < 1})}> {this.props.maxStockModifier.toFixed(2)} </td>
        <td className={classname({'success': this.props.sellPriceModifier >= 1, 'danger': this.props.sellPriceModifier < 1})}> {this.props.sellPriceModifier.toFixed(2)} </td>
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
        <div className='row'>
          <div className='col-lg-6 col-sm-12'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <td>Name</td>
                <td>Stock Cost Modifier</td>
                <td>Max Stock Modifier</td>
                <td>Sell Price Modifier</td>
              </tr>
            </thead>
            <tbody>
              {staff.map(s =>
                <Staff
                  key={s.id}
                  name={s.name}
                  stockCostModifier={s.stockCostModifier}
                  maxStockModifier={s.maxStockModifier}
                  sellPriceModifier={s.sellPriceModifier}
                />
              )}
            </tbody>
          </table>
          </div>
        </div>
      </div>
      )
    }
}

StaffManager.propTypes = {
  staff: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stockCostModifier: PropTypes.number.isRequired,
    maxStockModifier: PropTypes.number.isRequired,
    sellPriceModifier: PropTypes.number.isRequired
  }).isRequired).isRequired
}

Staff.propTypes = {
  name: PropTypes.string.isRequired,
  stockCostModifier: PropTypes.number.isRequired,
  maxStockModifier: PropTypes.number.isRequired,
  sellPriceModifier: PropTypes.number.isRequired
}

export default StaffManager
