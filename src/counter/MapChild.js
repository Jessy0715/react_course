import React, {Component} from 'react';


class MapChild extends Component {
  
  render() {
    return (
      <li>{this.props.children}</li>
    )
  }
}

export default MapChild;