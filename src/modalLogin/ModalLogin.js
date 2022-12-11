import React, { Component } from "react";
// import axios from 'axios';

import {Consumer} from './modalContext';
import ModalLoginForm from './ModalLoginForm';

// 原本寫在這，後來移到 ModalLoginForm.js
// 原因: 講師補充: 我們從 React.createContext 所拿到的 Provider 與 Consumer 是「React 組件使用組件必須 render JSX <Consumer>，讓 React 在背後執行 createElement 並進行管理，但我們呼叫 API 的時候是做一個單純的函式呼叫，因此沒辦法在裡面運用 Consumer 組件，所以才要以其他方式取得 context 內的數值

// class ModalLogin extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       username: '',
//       password: ''
//     }
//   }
  
//   onChangeUsername = (e) => {
//     this.setState({
//       username: e.target.value
//     })
//   }
//   onChangePassword = (e) => {
//     this.setState({
//       password: e.target.value
//     })
//   }
//   onSubmit = (e) => {
//     e.preventDefault();
//     const {username, password} = this.state
//     // axios.post('/api/login', {username, password})
//     //   .then((res)=> {
//     //     if (res.data.success) {

//     //     }
//     //   })
//   }
//   render() {
//     const {username, password} = this.state
//     return (
//       <form className="modal-login" onSubmit={this.onSubmit}>
//         <input type="text" value={username} onChange={this.onChangeUsername} />
//         <br />
//         <input
//           type="password"
//           value={password}
//           onChange={this.onChangePassword}
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     )
//   }
// }

// context API 是給 Consumer 使用，不能在函式裡面呼叫 Consumer 組件，因此才使用父層 props 的方式傳入給子層

// 講師補充: 使用 Context 的情境一般是想達成「跨組件的資料傳遞」，但「不想傳遞過於冗長的 props」並不是必須的，例如此課程範例其實也可以設計 App 的 state 並分別傳遞 props 給 Header 與 Modal 來達成相同結果

const ModalLogin = () => (
  <Consumer>
    {
      ({setState}) => <ModalLoginForm setState={setState} />
    }
  </Consumer>
);


export default ModalLogin;