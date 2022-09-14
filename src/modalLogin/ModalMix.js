import React, { Component } from "react";
import Header from './Header';
import Modal from './Modal';
import { Provider } from './modalContext';

class ModalMix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // modal: null,
      modal: 'login',
      login: false,
    }
  }


  render() {
    // bind 在這裡很重要!!!
    const contextValue = {
      state: this.state,
      setState: this.setState.bind(this)
    }
    return (
      <Provider value={contextValue}>
        <div>
          <Header />
          <Modal />
        </div>
      </Provider>
    )
  }
}

export default ModalMix;