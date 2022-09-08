import React, {Component} from 'react';
import logo from './logo.svg';


class StyleCss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }
  toggle = () => {
    this.setState({
      visible: !this.state.visible
    })
  }
  render () {
    // 撰寫樣式有3種寫法

    const {visible} = this.state
    const styleObj = {display: visible? 'block': 'none'}
    return (
      <div>
          <button onClick={this.toggle}>Toggle</button>
          <hr />
          <div>
            {/* 1. 整體 jsx 三元判斷式 / &&寫法 */}
            {/* {visible? <img src={logo} className="App-logo" alt="logo" />: null } */}
            {/* {visible && <img src={logo} className="App-logo" alt="logo" /> } */}

            {/* 2. style 帶入 Obj寫法，可以寫在外層宣告，或是直接塞入 jsx裡面 */}
            {/* <img style={styleObj} src={logo} className="App-logo" alt="logo" /> */}

            {/* 3. className 寫法，可以寫在外層宣告，或是直接塞入 jsx裡面 */}
            <img src={logo} className={`App-logo image ${visible? '':'hide'}` } alt="logo" />
          </div>
      </div>
    )
  }
} 

export default StyleCss