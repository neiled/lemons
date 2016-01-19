import React, { PropTypes } from 'react'

class StockBuyButton extends React.Component {
  render () {
    const {amount, stockAmount, cash, incrementStock, stockCost, maxStock} = this.props
    return (
      <li>
        <button className='btn btn-default'
                onClick={() => incrementStock(amount, stockCost)}
                disabled={stockAmount > maxStock - amount || cash < stockCost * amount}>
          x {amount} (${stockCost * amount})
        </button>
      </li>
    )
  }
  static propTypes = {
    stockAmount: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    cash: PropTypes.number.isRequired,
    stockCost: PropTypes.number.isRequired,
    maxStock: PropTypes.number.isRequired,
    incrementStock: PropTypes.func.isRequired
  };
}

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
  getPanelType (stockAmount) {
    var panel_type = 'panel '
    if (stockAmount <= 0) {
      panel_type = panel_type.concat('panel-danger')
    } else if (stockAmount < 5) {
      panel_type = panel_type.concat('panel-warning')
    } else panel_type = panel_type.concat('panel-success')

    return panel_type
  }
  delete_business (stockAmount, stockCost, sellBusiness) {
    if (confirm('Are you sure you want to delete?')) {
      sellBusiness(stockAmount * stockCost)
    }
  }
  render () {
    const {name, stockAmount, cash, incrementStock, sellBusiness, stockCost, sellPrice, maxStock} = this.props
    var panel_type = this.getPanelType(stockAmount)

    return (
    <div className='col-xs-12 col-md-4'>
      <div className={panel_type} >
        <div className='panel-heading'>
          <h3 className='panel-title'>{name}</h3>
        </div>
        <div className='panel-body'>
          <p>Stock Remaining: {stockAmount}</p>
          <p>Sale Price: {sellPrice}</p>
          <p>
          Buy Stock @ ${stockCost}:&nbsp;
          </p>
          <ul className='list-inline'>
            <StockBuyButton amount={1} cash={cash} stockCost={stockCost} incrementStock={incrementStock} maxStock={maxStock} stockAmount={stockAmount}/>
            <StockBuyButton amount={5} cash={cash} stockCost={stockCost} incrementStock={incrementStock} maxStock={maxStock} stockAmount={stockAmount} />
            <StockBuyButton amount={maxStock - stockAmount} cash={cash} stockCost={stockCost} incrementStock={incrementStock} maxStock={maxStock} stockAmount={stockAmount} />
          </ul>
          <button className='btn btn-danger' onClick={() => this.delete_business(stockAmount, stockCost, sellBusiness)}>Sell @ ${stockAmount * stockCost}</button>
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
    maxStock: PropTypes.number.isRequired,
    sellPrice: PropTypes.number.isRequired,
    incrementStock: PropTypes.func.isRequired,
    sellBusiness: PropTypes.func.isRequired,
    sellStock: PropTypes.func.isRequired
  };
}
export default Business
