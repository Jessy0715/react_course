import React, { Component } from "react";
import ErrorChild from './ErrorChild'

// 當裏頭有子組件發生錯誤，錯誤處理有2個方式

// 1. getDerivedStateFromError: 適合用來做視覺的狀態處理
// 錯誤的提示只會在【開發模式】中出現，若打包後，並不會出現錯誤提示，而畫面上如果沒有設定，有可能就只有空白畫面

// 2. componentDidCatch: 適合用來處理其他副作用，例如 打API、轉網址

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }

  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  componentDidCatch(err, info) {
    // axios.post('api/logger', {info})
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      // 通常可以做一個'錯誤' UI畫面
      return <h1>Error!</h1>
    }
    return (
      <div>
        Error 處理
        <ErrorChild />
      </div>
    )
  }
}

export default Error;