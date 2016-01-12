import React, { PropTypes } from 'react'

class Business extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    incrementStock: PropTypes.func.isRequired
  };
  render () {
    return (
    <li>
      <p>{this.props.name}</p>
      <p>{this.props.amount}</p>
      <button className='btn btn-default'
              onClick={this.props.incrementStock}>
        Buy Stock
      </button>
    </li>
    )
  }
}
export default Business
