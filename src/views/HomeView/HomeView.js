import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import { actions as counterActions } from '../../redux/modules/counter'
// import classes from './HomeView.scss'
import BusinessManager from '../../components/BusinessManager'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
// const mapStateToProps = (state) => ({
//   counter: state.counter
// })
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
