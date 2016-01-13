import React, { Component, PropTypes } from 'react'
import Business from './Business'

export default class BusinessManager extends Component {
    render () {
      const { businesses, actions } = this.props

      return (
      <div>
        <div className='row'>
          {businesses.map(business =>
            <Business
              key={business.id}
              name={business.name}
              amount={business.amount}
              incrementStock={() => actions.incrementStock(business.id, 1)}
              {...business}
            />
          )}
        </div>
        <button className='btn btn-success' onClick={(e) => actions.addBusiness('Lemon Stand')}>
          <span className='glyphicon glyphicon-plus' aria-hidden='true'></span> Buy Lemon Stand
        </button>
      </div>
      )
    }
}

BusinessManager.propTypes = {
  actions: PropTypes.object.isRequired,
  businesses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default BusinessManager
