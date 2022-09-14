import React, { Component, PureComponent } from "react";

// ShouldComponentUpdate 注意要點
// 1.使用時機: 控制組件要不要更新的時候，才用此函式
// 2.傳入 nextProps、nextState 兩參數，回傳 Boolean
// 3.如果回傳 false，儘管 props 或 state 有改變，後續也沒得 run (被擋住了)

// 情境: 父層不斷傳來毫秒，利用 ShouldComponentUpdate 可以決定何時更新，原本1秒更新60次，轉變為1秒更新1次，效能好了60倍

class ShouldComponentUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ms: 100
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 正常寫法:
    // if (
    //   parseInt(nextProps.ms / 1000, 10) !== parseInt(this.props.ms / 1000, 10)
    // ) {
    //   return true
    // }
    // return false

    // 縮寫:
    return (parseInt(nextProps.ms / 1000, 10) !== parseInt(this.props.ms / 1000, 10))
  }

  render() {
    const { ms } = this.state
    return <div>{ parseInt(ms/1000, 10)}</div>;
  }
}

// 可以使用 PureComponent，內建做比較
// 下一個所有的 props 跟上一個所有的 props 來比較，如果有一個不一樣，才會重新 render，[ 只比較一層 props ]
class ShouldComponentUpdate extends PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    return Object.keys(nextProps).some((key) => this.props[key] !== nextProps[key])
  }
}

export default ShouldComponentUpdate;
