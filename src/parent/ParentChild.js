import React, {Component} from 'react';


class ParentChild extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  addCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    return (
      <div>
        ParentChild: {this.state.count}
        <br />
        <button onClick={this.props.addParentCount}>+ Parent</button>
        <button onClick={this.addCount}>+ Child</button>
      </div>
    )
  }
}


export default ParentChild;