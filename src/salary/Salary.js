import React, { Component } from "react";


class Salary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      month: 0,
      startTime: Date.now(),
      currentTime: Date.now()
    }
  }

  componentDidMount() {
    setInterval(()=> {
      this.setState({
        currentTime: Date.now()
      })
    },100)
  }

  onChangeMonth = (e) => {
    this.setState({
      month: parseInt(e.target.value, 10)
    })
  }

  render() {
    const {month, startTime, currentTime} = this.state;
    const hour = month / 240
    const min = hour / 60
    const second = min / 60
    const time = (currentTime - startTime) / 1000
    return (
      <div>
        <h6>計算薪水</h6>
        <label>月薪:</label>
        <input type="number" value={month} onChange={this.onChangeMonth} />
        <br />
        <label>時薪:</label>
        <input type="number" value={hour} />
        <br />
        <label>分薪:</label>
        <input type="number" value={min} />
        <br />
        <label>秒薪:</label>
        <input type="number" value={second} />
        <br />
        <label>經過時間:</label>
        <span>{ time.toFixed(1)}</span>
        <br />
        <label>偷取時間:</label>
        <span>{ (time * second).toFixed(1) }</span>
      </div>
    )
  }
}

export default Salary;