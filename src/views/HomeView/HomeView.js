import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import BusinessManager from '../../components/BusinessManager'

export class HomeView extends React.Component {

  render () {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>Welcome to Lemons </h1>
          <img src='lemon.png' style={{width: '100px', height: '100px'}}></img>
        </div>
        <BusinessManager />
        <Link to='/404'>Go to 404 Page</Link>
      </div>
    )
  }
}

export default connect()(HomeView)
