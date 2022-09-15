import React, { Component, createRef } from "react";

// 頁面上 DOM 被更新之前會執行 getSnapShotBeforeUpdate


// 情境: 要 log 一項項資料，卷軸會因為資料過多而往上滑動，但要在資料不斷更新的同時，讓卷軸不斷往下走
class GetSnapShotBeforeUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  ref = createRef()

  // scrollHeight => 內容物的整體高度 (含 padding)
  // scrollTop => 是內容物頂端和能被看見的最頂端之間的距離.
  getSnapShotBeforeUpdate(prevProps, prevState) {
    if (prevProps.items.length !== this.props.items.length) {
      const list = this.ref.current;
      return list.scrollHeight - list.scrollTop //卷軸距離底部的位置
    }
    return null
  }

  // snapShop 回傳什麼格式，這裡就會是什麼
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (snapShot) {
      const list = this.ref.current;
      list.scrollTop = list.scrollHeight - snapShot
    }
  }

  render() {
    const {items} = this.props;
    return (
      <div ref={this.ref}>
        {/* {items.map} */}
      </div>
    )
  }
}

export default GetSnapShotBeforeUpdate;