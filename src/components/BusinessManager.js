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
              name={business.name}
              {...business}
            />
          )}
        </ul>
        <button onClick={(e) => this.props.addBusiness()}>
          Add
        </button>
      </div>
      )
    }
}

BusinessManager.propTypes = {
  addBusiness: PropTypes.func.isRequired,
  businesses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default connect(mapStateToProps, businessActions)(BusinessManager)
