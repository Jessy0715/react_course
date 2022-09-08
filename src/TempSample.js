import React, { Component } from "react";

// constructor 建構函式規則有2個
// 1.constructor 裡面一定要呼叫 super
// 2.輸入 props 作為參數

// 禁止在 constructor 做的事情
// 1.勿跑 setState
// 2.勿在 props 裡面的屬性指定到 this.state 裡面
// 3.勿在裡面呼叫 ajax、fetch 函式
class TempSample extends Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <div>

      </div>
    )
  }
}

export default TempSample;