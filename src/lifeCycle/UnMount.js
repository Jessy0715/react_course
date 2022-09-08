import React, { Component } from "react";


class UnMount extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentDidUpdate(prevProps, prevState) {
    this.timer = setTimeout(() => this.update, 3000)
  }

  // 這個組件要離開的時候就會呼叫 componentWillUnmount
  // componentWillUnmount 最常用在取消監聽事件、取消 ajax、取消 timeout 的事件
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    clearTimeout(this.timer)
  }

  onScroll = () => {
    // ...
  }

  update = () => {
    // ...
  }

  render() {
    return (
      <div>
        生命週期函式 componentWillUnmount 常見使用方式
      </div>
    )
  }
}

export default UnMount;