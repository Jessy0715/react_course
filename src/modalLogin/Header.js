import React, { Component } from "react";
import "./header.css";
import { Consumer } from "./modalContext";

// 原本一開始寫是這樣
// class Header extends Component {
//   login = (e) => {
//     e.preventDefault();
//   };
//   render() {
//     return (
//       <div className="header">
//         <span>
//           <a href="#" onClick={this.login}>
//             Login
//           </a>
//         </span>
//       </div>
//     );
//   }
// }

// 後來改寫成 Functional component
const Header = () => {
  return (
  <Consumer>
    {({ setState }) => (
      <div className="header">
        <span>
          <a 
            href="" 
            onClick={(e) => {
            e.preventDefault()
            setState({ modal: 'login' })
          }}> 
            Login
          </a>
        </span>
      </div>
    )}
  </Consumer>
  )
};

export default Header;
