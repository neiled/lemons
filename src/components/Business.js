import React, { PropTypes } from 'react'

class Business extends React.Component {
  start_stock_take (seconds, sellStock) {
    this.timer = setTimeout(() => {
      if (this.props.stockAmount > 0) {
        sellStock()
      }
      this.start_stock_take(seconds, sellStock)
    }, seconds)
  }
  componentDidMount () {
    this.start_stock_take(1000, this.props.sellStock)
  }
  componentWillUnmount () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
  render () {
    const {name, stockAmount, cash, incrementStock, stockCost} = this.props
    var panel_type = 'panel '.concat(stockAmount > 0 ? 'panel-default' : 'panel-danger')
    return (
    <div className='col-xs-4'>
      <div className={panel_type} >
        <div className='panel-heading'>
          <h3 className='panel-title'>{name}</h3>
        </div>
        <div className='panel-body'>
          <p>Stock Remaining: {stockAmount}</p>
          <p>
            <button className='btn btn-default'
                    onClick={() => incrementStock(5, stockCost)}
                    disabled={cash < stockCost * 5}>
              Buy Stock (${stockCost})
            </button>
          </p>
        </div>
      </div>
    </div>
    )
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    stockAmount: PropTypes.number.isRequired,
    cash: PropTypes.number.isRequired,
    stockCost: PropTypes.number.isRequired,
    incrementStock: PropTypes.func.isRequired,
    sellStock: PropTypes.func.isRequired
  };
}
export default Business
