import React, { Component, PropTypes } from 'react'
import Business from './Business'

class BuyBusinessButton extends Component {
  render () {
    const {name, cash, cost, stockCost, salePrice, actions, maxCash} = this.props
    return (
      <li>
        <button className='btn btn-success' hidden={maxCash <= cost} disabled={cash < cost} onClick={(e) => actions.addBusiness({name: name, cost: cost, stock_cost: stockCost, sale_price: salePrice})}>
          <span className='glyphicon glyphicon-plus' aria-hidden='true'></span> Buy {name} (${cost})
        </button>
      </li>
    )
  }
}
export default class BusinessManager extends Component {
    render () {
      const { businesses, actions, cash, maxCash } = this.props

      return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <p>
              Cash: {cash}
            </p>
            <ul className='list-inline'>
              <BuyBusinessButton name='Lemonade Stand' cash={cash} cost={100} stockCost={1} salePrice={2} maxCash={maxCash} actions={actions} />
              <BuyBusinessButton name='Cookie Stand' cash={cash} cost={500} stockCost={2} salePrice={4} maxCash={maxCash} actions={actions} />
              <BuyBusinessButton name='Cupcake Stand' cash={cash} cost={1000} stockCost={3} salePrice={6} maxCash={maxCash} actions={actions} />
            </ul>
          </div>
        </div>
        <div className='row'>
          {businesses.map(business =>
            <Business
              key={business.id}
              name={business.name}
              stockAmount={business.stockAmount}
              cash={cash}
              stockCost={business.stock_cost}
              incrementStock={(amount, cost) => actions.incrementStock(business.id, amount, cost)}
              sellStock={() => actions.sellStock(business.id, 1, business.sale_price)}
              {...business}
            />
          )}
        </div>
      </div>
      )
    }
}

BuyBusinessButton.propTypes = {
  name: PropTypes.string.isRequired,
  cash: PropTypes.number.isRequired,
  maxCash: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
  stockCost: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  salePrice: PropTypes.number.isRequired
}

BusinessManager.propTypes = {
  cash: PropTypes.number.isRequired,
  maxCash: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  businesses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    stockAmount: PropTypes.number.isRequired,
    stock_cost: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default BusinessManager
