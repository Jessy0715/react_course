import React, { Component } from "react";
import { Consumer } from './modalContext';
import ModalLogin from './ModalLogin';
import './modal.css'

class Modal extends Component {
  renderContent = (modal) => {
    switch(modal) {
      case 'login':
        return <ModalLogin />;
      default:
        return null;
    }
  }
  render() {
    return (
      <Consumer>
        {
          ({state}) => {
            const {modal} = state
            if (!modal) return null;

            return (
              <div className="modal">
                <div className="modal-content">

                  {/* 這裡有待參數卻不用寫箭頭函式，是因為不是透過 onClick 觸發 */}
                  {this.renderContent(modal)}

                </div>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default Modal;