import React, {Component} from 'react';


class CountChild extends Component {


  render() {
    return (
      <li>{this.props.text} {this.props.price}{this.props.children}</li>
    )
  }
}




export default CountChild;