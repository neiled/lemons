import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as businessActions } from 'redux/modules/business_manager'

import Business from './Business'

const mapStateToProps = (state) => ({
  businesses: state.business_manager
})
export default class BusinessManager extends Component {
    render () {
      const {dispatch} = this.props
      return (
      <div>
        <ul>
          {this.props.businesses.map(business =>
            <Business
              key={business.id}
              name={business.name}
              amount={business.amount}
              incrementStock={() => dispatch(businessActions.incrementStock(business.id, 1))}
              {...business}
            />
          )}
        </ul>
        <button onClick={(e) => dispatch(businessActions.addBusiness('test'))}>
          Add
        </button>
      </div>
      )
    }
}

BusinessManager.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default connect(mapStateToProps)(BusinessManager)
