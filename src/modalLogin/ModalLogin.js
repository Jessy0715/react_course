import React, { Component } from "react";
// import axios from 'axios';

import {Consumer} from './modalContext';
import ModalLoginForm from './ModalLoginForm';

// 原本寫在這，後來移到 ModalLoginForm.js
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
const ModalLogin = () => (
  <Consumer>
    {
      ({setState}) => <ModalLoginForm setState={setState} />
    }
  </Consumer>
);


export default ModalLogin;