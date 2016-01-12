import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import increaseStock from '../redux/modules/business'
import { actions as businessActions } from '../redux/modules/business'

const mapStateToProps = (state) => ({
  counter: state.business.counter
})
class Business extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    incrementStock: PropTypes.func.isRequired
  };
  render () {
    return (
    <div>
      <p>{this.props.name}</p>
      <p>{this.props.counter}</p>
      <button className='btn btn-default'
              onClick={() => this.props.incrementStock(1)}>
        Buy Stock
      </button>
    </div>
    )
  }
}
export default connect(mapStateToProps, businessActions)(Business)
