import React, {Component} from 'react';
import ProgressBar from "./ProgressBar";



class Progress extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 30,
      info: {
        x: 1
      }
    }
  }

  add = () => {
    // const {info} = this.state
    // info.x += 1
    this.setState({
      value: this.state.value + 1 //PureComponent 會 render
      // value: 0 //PureComponent 不會 render
      // info: this.state.info //PureComponent 不會 render
      // info: info //PureComponent 不會 render，因為會認為是同個 info，且只看第一層 (搭配 上面的解構程式碼)
    })
  }

  render() {
    const {value} = this.state
    return (
      <div>
        <ProgressBar value={value} />
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

export default Progress