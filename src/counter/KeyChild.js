import React, {Component} from 'react';


class KeyChild extends Component {
  
  render() {
    console.log('render' ,this.props.text);
    return (
      <li>{this.props.text}</li>
    )
  }
}

export default KeyChild;