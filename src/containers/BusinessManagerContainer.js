import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BusinessManager from '../components/BusinessManager'
import * as BusinessManagerActions from '../redux/modules/businesses'

class BusinessManagerContainer extends Component {
  render () {
    const { businesses, user, actions } = this.props
    return (
      <div>
        <BusinessManager businesses={businesses} cash={user.cash} actions={actions} />
      </div>
    )
  }
}

BusinessManagerContainer.propTypes = {
  user: PropTypes.object.isRequired,
  businesses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    businesses: state.businesses,
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(BusinessManagerActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessManagerContainer)
