import React, { PropTypes } from 'react'

class Business extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  render () {
    return (
    <p>{this.props.name}</p>
    )
  }
}

export default Business
