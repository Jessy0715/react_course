import React, { Component } from "react";
import './toggle.css'
import img1 from '../../image/img1.jpeg';

class PromoteCard extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     open: true
  //   }
  // }
  // toggle = () => {
  //   this.setState({
  //     open: !this.state.open
  //   })
  // }
  render() {
    // 1.組件拿掉共用邏輯部分
    // 2.原本從 state 傳，改為 props
    const {open, toggle} = this.props
    return (
      <div>
        <h6 style={{ cursor: 'pointer'}} className="title" onClick={toggle}>Promote Card</h6>
        {
          open && <img width= '100px' src={img1} />
        }
      </div>
    )
  }
}

export default PromoteCard;