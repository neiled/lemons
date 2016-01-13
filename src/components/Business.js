import React, { PropTypes } from 'react'

class Business extends React.Component {
  start_stock_take (seconds, decrementStock) {
    setTimeout(() => {
      if (this.props.amount > 0) {
        decrementStock()
      }
      this.start_stock_take(seconds, decrementStock)
    }, seconds)
  }
  componentDidMount () {
    this.start_stock_take(5000, this.props.decrementStock)
  }
  render () {
    return (
    <div className='col-xs-4'>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>{this.props.name}</h3>
        </div>
        <div className='panel-body'>
          <p>Stock Remaining: {this.props.amount}</p>
          <p>
            <button className='btn btn-default'
                    onClick={this.props.incrementStock}>
              Buy Stock
            </button>
          </p>
        </div>
      </div>
    </div>
    )
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    incrementStock: PropTypes.func.isRequired,
    decrementStock: PropTypes.func.isRequired
  };
}
export default Business
