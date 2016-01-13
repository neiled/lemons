import React, { Component, PropTypes } from 'react'
import Business from './Business'

export default class BusinessManager extends Component {
    render () {
      const { businesses, actions, cash } = this.props

      return (
      <div>
        <div className='row'>
        Cash: {cash}
        </div>
        <div className='row'>
          {businesses.map(business =>
            <Business
              key={business.id}
              name={business.name}
              amount={business.amount}
              incrementStock={() => actions.incrementStock(business.id, 1, business.stock_cost)}
              decrementStock={() => actions.decrementStock(business.id, 1)}
              {...business}
            />
          )}
        </div>
        <button className='btn btn-success' disabled={cash < 100} onClick={(e) => actions.addBusiness({name: 'Lemon Stand', cost: 100, stock_cost: 1})}>
          <span className='glyphicon glyphicon-plus' aria-hidden='true'></span> Buy Lemon Stand
        </button>
      </div>
      )
    }
}

BusinessManager.propTypes = {
  cash: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  businesses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default BusinessManager
