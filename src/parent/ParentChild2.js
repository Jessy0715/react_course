import React, {Component} from 'react';


class ParentChild2 extends Component {

  render() {
    const {count, addParentCount, addChildCount} = this.props
    return (
      <div>
        ParentChild2: {count}
        <br />
        <button onClick={addParentCount}>+ Parent</button>
        <button onClick={addChildCount}>+ Child</button>
      </div>
    )
  }
}


export default ParentChild2;