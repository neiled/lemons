import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import BusinessManagerContainer from 'containers/BusinessManagerContainer'
import * as UserActions from 'redux/modules/user'
import { Link } from 'react-router'

export class HomeView extends Component {

  render () {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>
            Lemons
            <img onClick={() => this.props.dispatch(UserActions.cashIncrease(1))} src='lemon.png'></img>
          </h1>
          <div className='text-right'>
            <ul className='list-unstyled'>
              <li><small><a href='https://twitter.com/neiled'>@neiled</a></small></li>
              <li><small> <Link to='/Changelog'>Changelog</Link></small></li>
            </ul>
          </div>
        </div>
        <BusinessManagerContainer />
      </div>
    )
  }
}

HomeView.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(HomeView)
