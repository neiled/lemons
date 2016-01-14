import React, { PropTypes } from 'react'

class Business extends React.Component {
  start_stock_take (seconds, decrementStock) {
    this.timer = setTimeout(() => {
      if (this.props.amount > 0) {
        decrementStock()
      }
      this.start_stock_take(seconds, decrementStock)
    }, seconds)
  }
  componentDidMount () {
    this.start_stock_take(1000, this.props.decrementStock)
  }
  componentWillUnmount () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
  render () {
    const {name, amount, cash, incrementStock, stockCost} = this.props
    return (
    <div className='col-xs-4'>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>{name}</h3>
        </div>
        <div className='panel-body'>
          <p>Stock Remaining: {amount}</p>
          <p>
            <button className='btn btn-default'
                    onClick={incrementStock}
                    disabled={cash < stockCost}>
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
    cash: PropTypes.number.isRequired,
    stockCost: PropTypes.number.isRequired,
    incrementStock: PropTypes.func.isRequired,
    decrementStock: PropTypes.func.isRequired
  };
}
export default Business
