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
    var panel_type = 'panel '
    if (stockAmount <= 0) {
      panel_type = panel_type.concat('panel-danger')
    } else if (stockAmount < 5) {
      panel_type = panel_type.concat('panel-warning')
    } else panel_type = panel_type.concat('panel-success')

    return (
    <div className='col-xs-4'>
      <div className={panel_type} >
        <div className='panel-heading'>
          <h3 className='panel-title'>{name}</h3>
        </div>
        <div className='panel-body'>
          <p>Stock Remaining: {stockAmount}</p>
          <p>
          Buy Stock:&nbsp;
            <button className='btn btn-default'
                    onClick={() => incrementStock(1, stockCost)}
                    disabled={cash < stockCost * 1}>
              x 1 (${stockCost})
            </button>
            <button className='btn btn-default'
                    onClick={() => incrementStock(5, stockCost)}
                    disabled={cash < stockCost * 5}>
              x 5 (${stockCost * 5})
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
