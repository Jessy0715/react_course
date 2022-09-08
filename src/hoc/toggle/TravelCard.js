import React, { Component } from "react";
import './toggle.css';
import img2 from '../../image/img2.jpeg';

class TravelCard extends Component {
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
        <h6 style={{ cursor: 'pointer'}} className="title" onClick={toggle}>Travel Card</h6>
        {
          open && <img  width= '100px' src={img2} />
        }
      </div>
    )
  }
}

export default TravelCard;