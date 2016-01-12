import React, { PropTypes } from 'react'
// import { connect } from 'react-redux'
// import increaseStock from '../redux/modules/business'
// import { actions as businessActions } from 'redux/modules/business'

// const mapStateToProps = (state) => ({
//   counter: state.counter
// })
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
              onClick={() => this.props.incrementStock({id: 1, amount: 1})}>
        Buy Stock
      </button>
    </li>
    )
  }
}
export default Business
// export default connect(mapStateToProps, businessActions)(Business)
