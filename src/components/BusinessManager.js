import React, { Component, PropTypes } from 'react'
import Business from './Business'

class BuyBusinessButton extends Component {
  render () {
    const {name, cash, cost, stockCost, salePrice, actions, maxCash, maxStock} = this.props
    return (
      <li>
        <button className='btn btn-primary' hidden={maxCash < cost} disabled={cash < cost} onClick={(e) => actions.addBusiness({name: name, cost: cost, stock_cost: stockCost, sale_price: salePrice, maxStock: maxStock})}>
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
            <h3>
              Cash: ${cash}
            </h3>
            <div>
              <div className='row'>
                <div className='col-md-12'>
                  <ul id='myTabs' className='nav nav-tabs' role='tablist'>
                    <li role='presentation' className='active'><a href='#businesses' aria-controls='businesses' role='tab' data-toggle='tab'>Businesses</a></li>
                    <li role='presentation'><a href='#staff' aria-controls='staff' role='tab' data-toggle='tab'>Staff</a></li>
                  </ul>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='tab-content'>
                    <div className='tab-pane active' id='businesses'>
                      <div className='row'>
                        <div className='col-md-12'>
                          <ul className='list-inline'>
                            <BuyBusinessButton name='Lemonade Stand' cash={cash} cost={50} stockCost={1} salePrice={2} maxCash={maxCash} actions={actions} maxStock={25} />
                            <BuyBusinessButton name='Cookie Stand' cash={cash} cost={250} stockCost={2} salePrice={4} maxCash={maxCash} actions={actions} maxStock={25} />
                            <BuyBusinessButton name='Cupcake Stand' cash={cash} cost={500} stockCost={3} salePrice={6} maxCash={maxCash} actions={actions} maxStock={25} />
                            <BuyBusinessButton name='Ice Cream Stand' cash={cash} cost={1000} stockCost={4} salePrice={8} maxCash={maxCash} actions={actions} maxStock={25} />
                            <BuyBusinessButton name='Burger Stand' cash={cash} cost={5000} stockCost={5} salePrice={10} maxCash={maxCash} actions={actions} maxStock={25} />
                            <BuyBusinessButton name='Banana Stand' cash={cash} cost={10000} stockCost={6} salePrice={12} maxCash={maxCash} actions={actions} maxStock={25} />
                          </ul>
                        </div>
                      </div>
                      <div className='row'>
                        {businesses.map(business =>
                          <Business
                            key={business.id}
                            name={business.name}
                            stockAmount={business.stockAmount}
                            maxStock={business.maxStock}
                            sellPrice={business.sale_price}
                            cash={cash}
                            stockCost={business.stock_cost}
                            incrementStock={(amount, cost) => actions.incrementStock(business.id, amount, cost)}
                            sellBusiness={(sellValue) => actions.sellBusiness(business.id, sellValue)}
                            sellStock={() => actions.sellStock(business.id, 1, business.sale_price)}
                            {...business}
                          />
                        )}
                      </div>
                    </div>
                    <div className='tab-pane' id='staff'>
                      This will list the staff you have.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
}

BuyBusinessButton.propTypes = {
  name: PropTypes.string.isRequired,
  cash: PropTypes.number.isRequired,
  maxCash: PropTypes.number.isRequired,
  maxStock: PropTypes.number.isRequired,
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
