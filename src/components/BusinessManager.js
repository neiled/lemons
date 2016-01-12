import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as businessActions } from 'redux/modules/business_manager'

import Business from './Business'

const mapStateToProps = (state) => ({
  businesses: state.business_manager
})
export default class BusinessManager extends Component {
    render () {
      return (
      <div>
        <ul>
          {this.props.businesses.map(business =>
            <Business
              key={business.id}
              name={business.name}
              amount={business.amount}
              incrementStock={() => this.props.incrementStock(business.id, 1)}
              {...business}
            />
          )}
        </ul>
        <button onClick={(e) => this.props.addBusiness('test')}>
          Add
        </button>
      </div>
      )
    }
}

BusinessManager.propTypes = {
  incrementStock: PropTypes.func.isRequired,
  addBusiness: PropTypes.func.isRequired,
  businesses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default connect(mapStateToProps, businessActions)(BusinessManager)
