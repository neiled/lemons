import React from 'react'
import { connect } from 'react-redux'
import BusinessManagerContainer from 'containers/BusinessManagerContainer'

export class HomeView extends React.Component {

  render () {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>
            Lemons
            <img src='lemon.png'></img>
          </h1>
          <small><a className='pull-right' href='https://twitter.com/neiled'>@neiled</a></small>
        </div>
        <BusinessManagerContainer />
      </div>
    )
  }
}

export default connect()(HomeView)
