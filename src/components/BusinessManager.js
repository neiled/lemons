import React, { Component, PropTypes } from 'react'
import Business from './Business'
import StaffManager from './StaffManager'
import styles from 'styles/lemons.scss'
import classnames from 'classnames'

class BuyBusinessButton extends Component {
  render () {
    const {name, cash, cost, stockCost, salePrice, actions, maxCash, maxStock} = this.props
    return (
        <button className='btn btn-primary btn-block btn-small' hidden={maxCash < cost} disabled={cash < cost} onClick={(e) => actions.addBusiness({name: name, cost: cost, stock_cost: stockCost, sale_price: salePrice, maxStock: maxStock})}>
          <span className='glyphicon glyphicon-plus' aria-hidden='true'></span> {name} (${cost})
        </button>
    )
  }
}

class Plot extends Component {
  getCost () {
    var count = (this.props.businesses.length + this.props.plotsCount)
    var cost = Math.pow(2, count) * 150
    return cost
  }
  getPanelContent (available, cash, maxCash, actions) {
    if (available === false) {
      return (
        <div>
          <h3>Buy this Plot</h3>
          <button disabled={cash < this.getCost()} className='btn btn-success btn-lg' onClick={(e) => actions.buyPlot(this.getCost()) }>Buy (${this.getCost()})</button>
        </div>
      )
    }
    return (
        <div>
          <BuyBusinessButton name='Lemonade Stand' cash={cash} cost={50} stockCost={1} salePrice={2} maxCash={maxCash} actions={actions} maxStock={25} />
          <BuyBusinessButton name='Cookie Stand' cash={cash} cost={250} stockCost={2} salePrice={4} maxCash={maxCash} actions={actions} maxStock={25} />
          <BuyBusinessButton name='Cupcake Stand' cash={cash} cost={1000} stockCost={3} salePrice={6} maxCash={maxCash} actions={actions} maxStock={25} />
          <BuyBusinessButton name='Ice Cream Stand' cash={cash} cost={5000} stockCost={4} salePrice={8} maxCash={maxCash} actions={actions} maxStock={25} />
          <BuyBusinessButton name='Burger Stand' cash={cash} cost={25000} stockCost={5} salePrice={10} maxCash={maxCash} actions={actions} maxStock={25} />
          <BuyBusinessButton name='Banana Stand' cash={cash} cost={100000} stockCost={6} salePrice={12} maxCash={maxCash} actions={actions} maxStock={25} />
        </div>
    )
  }
  render () {
    const { available, actions, cash, maxCash } = this.props
    return (
      <div className='col-xs-12 col-md-4'>
        <div className='panel panel-info' >
          <div className='panel-heading'>
            <h4 className=''>New Plot</h4>
          </div>
          <div className={classnames('panel-body', styles.fixedpanel, 'text-center')}>
            {this.getPanelContent(available, cash, maxCash, actions)}
          </div>
        </div>
      </div>
    )
  }
}

export default class BusinessManager extends Component {
  renderPlots (available, cash, maxCash, actions, businesses) {
    var plots = []
    for (var i = 0; i < available; i++) {
      plots.push(<Plot cash={cash} maxCash={maxCash} actions={actions} businesses={businesses} plotsCount={available} />)
    }
    plots.push(<Plot available={false} cash={cash} maxCash={maxCash} actions={actions} businesses={businesses} plotsCount={available} />)
    return <div>{plots}</div>
  }
  render () {
    const { businesses, staff, actions, cash, maxCash, availablePlots } = this.props

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
                <ul id='myTabs' className={classnames('nav nav-tabs', styles.myTabs)} role='tablist'>
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
                      {this.renderPlots(availablePlots, cash, maxCash, actions, businesses)}
                    </div>
                  </div>
                  <div className='tab-pane' id='staff'>
                    <StaffManager staff={staff} />
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

Plot.propTypes = {
  cash: PropTypes.number.isRequired,
  plotsCount: PropTypes.number.isRequired,
  businesses: PropTypes.array.isRequired,
  available: PropTypes.bool,
  maxCash: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
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
  availablePlots: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  businesses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    stockAmount: PropTypes.number.isRequired,
    stock_cost: PropTypes.number.isRequired
  }).isRequired).isRequired,
  staff: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default BusinessManager
