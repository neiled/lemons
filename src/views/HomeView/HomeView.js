import React from 'react'
import { connect } from 'react-redux'
import BusinessManagerContainer from 'containers/BusinessManagerContainer'

export class HomeView extends React.Component {

  render () {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>
            Welcome to Lemons
            <img src='lemon.png' style={{width: '100px', height: '100px'}}></img>
          </h1>
        </div>
        <BusinessManagerContainer />
      </div>
    )
  }
}

export default connect()(HomeView)
