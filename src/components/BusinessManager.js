import React, { Component, PropTypes } from 'react'
import Business from './Business'

class BuyBusinessButton extends Component {
  render () {
    const {name, cash, cost, stockCost, salePrice, actions} = this.props
    return (
      <li>
        <button className='btn btn-success' disabled={cash < cost} onClick={(e) => actions.addBusiness({name: name, cost: cost, stock_cost: stockCost, sale_price: salePrice})}>
          <span className='glyphicon glyphicon-plus' aria-hidden='true'></span> Buy {name} (${cost})
        </button>
      </li>
    )
  }
}
export default class BusinessManager extends Component {
    render () {
      const { businesses, actions, cash } = this.props

      return (
      <div>
        <div className='row'>
          <p>
            Cash: {cash}
          </p>
          <ul className='list-inline'>
            <BuyBusinessButton name='Lemon Stand' cash={cash} cost={100} stockCost={1} salePrice={3} actions={actions} />
            <BuyBusinessButton name='Cookie Stand' cash={cash} cost={500} stockCost={3} salePrice={5} actions={actions} />
          </ul>
        </div>
        <div className='row'>
          {businesses.map(business =>
            <Business
              key={business.id}
              name={business.name}
              amount={business.amount}
              cash={cash}
              stockCost={business.sale_price}
              incrementStock={() => actions.incrementStock(business.id, 1, business.stock_cost)}
              decrementStock={() => actions.sellStock(business.id, 1, business.sale_price)}
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
  cost: PropTypes.number.isRequired,
  stockCost: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  salePrice: PropTypes.number.isRequired
}

BusinessManager.propTypes = {
  cash: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  businesses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default BusinessManager
