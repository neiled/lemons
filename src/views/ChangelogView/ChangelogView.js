import React from 'react'
import { Link } from 'react-router'

export class ChangelogView extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>Changelog</h1>
          <h4>v0.0.12</h4>
          <Link to='/'>Back To Home View</Link>
        </div>
        <ul>
          <li>v0.0.12
            <ul>
              <li>Added Changelog</li>
              <li>Added Plots (need to buy a plot before you can build a business there)</li>
              <li>Added 'hidden' clicker...</li>
            </ul>
          </li>
          <li>v0.0.11
            <ul>
              <li>Added staff tab (not used yet)</li>
              <li>Added confirm before selling a business</li>
              <li>Added more businesses and improved costs scaling</li>
              <li>Fixed bug when selling a business</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default ChangelogView
