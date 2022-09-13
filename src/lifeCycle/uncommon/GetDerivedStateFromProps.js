import React, { Component } from "react";
import { ThemeProvider } from "styled-components";


// getDerivedStateFromProps 注意要點
// 1. 因為是 static ，所以沒有 this
// 2. 不能做 非同步的操作 ex:Async
// 3. 傳入 props 與 state 參數，回傳一個新的 state，否則就回傳 null; 每次從 props 的變動，去取得新的 state
// 4. 在每一個種類的生命週期都會被呼叫  


// class GetDerivedStateFromProps extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       items: [],
//       count: 0
//     }
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.items !== prevState.items) {
//       return {
//         items: nextProps.items,
//         count: nextProps.items.length
//       }
//     }
//     return null;
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }




// 舉一個範例
class GetDerivedStateFromProps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      propText: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.text !== prevState.propText) {
      return {
        text: nextProps.text, //回傳薪的的那一個
        propText: nextProps.text //回傳薪的的那一個
      }
    }
    return null;
  }

  onChangeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  // 適合使用時機: 做復原(預設值)功能
  reset = (e) => {
    this.setState({
      text: this.state.propText
    })
  }

  render() {
    const {text} = this.state
    return (
      <div>
        <input value={text} onChange={this.onChangeText} />
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}







// vvvvvvvvv 可以用 componentDidUpdate 改寫，一樣可以做到上面的同一件事情 vvvvvvvvv

// class GetDerivedStateFromProps extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       text: props.text
//     }
//   }

//   // 差異點: 效能上比 getDerivedStateFromProps 差一點點
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.text !== this.props.text) {
//       this.setState({
//         text: this.props.text //回傳薪的的那一個
//       })
//     }
//   }

//   onChangeText = (e) => {
//     this.setState({
//       text: e.target.value
//     })
//   }

//   // 適合使用時機: 做復原(預設值)功能
//   reset = (e) => {
//     this.setState({
//       text: this.props.text
//     })
//   }

//   render() {
//     const {text} = this.state
//     return (
//       <div>
//         <input value={text} onChange={this.onChangeText} />
//         <button onClick={this.reset}>Reset</button>
//       </div>
//     )
//   }
// }



export default GetDerivedStateFromProps;