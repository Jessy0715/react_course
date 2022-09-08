import React, {Component, createRef} from 'react';
import ParentChild from './ParentChild.js'
import ParentChild2 from './ParentChild2.js'

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      childCount: 88
    }
  }
  childRef = createRef();
  addCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  addChildCount = () => {
    // 1.利用 createRef 傳至子層
    // this.childRef.current.addCount()

    // 2.父層完全擁有自主權，傳入值跟函式給子層
    this.setState({
      childCount: this.state.childCount + 1
    })
  }

  render() {
    return (
      // 組件父子溝通，有2種方式
      <div>
        Parent: {this.state.count}
        <br />
        <button onClick={this.addCount}>+ Parent</button>
        <button onClick={this.addChildCount}>+ Child</button>

        {/* 1.利用 createRef 傳至子層 */}
        <ParentChild ref={this.childRef} addParentCount={this.addCount} />

        {/* 2.父層完全擁有自主權，傳入值跟函式給子層 */}
        <ParentChild2 count={this.state.childCount} addParentCount={this.addCount} addChildCount={this.addChildCount} />
      </div>
    )
  }
}


export default Parent;