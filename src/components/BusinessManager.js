import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { actions as businessActions } from 'redux/modules/business_manager'

import Business from './Business'

// const mapStateToProps = (state) => ({
//   businesses: state.business_manager
// })
export default class BusinessManager extends Component {
    render () {
      const { businesses, actions } = this.props

      // const {dispatch} = this.props
      return (
      <div>
        <ul>
          {businesses.map(business =>
            <Business
              key={business.id}
              name={business.name}
              amount={business.amount}
              incrementStock={() => actions.incrementStock(business.id, 1)}
              {...business}
            />
          )}
        </ul>
        <button onClick={(e) => actions.addBusiness('test')}>
          Add
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

// export default connect(mapStateToProps, businessActions)(BusinessManager)
