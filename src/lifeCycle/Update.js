import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData : {

      }
    }
  }
  // 第一次繪製到頁面上會是 componentDidMount，不會是 componentDidUpdate
  componentDidMount() {
    this.fetchData(this.props.userId)
  }

  // 後續的 update ，當props 或 state 有變，會呼叫 componentDidUpdate，不會呼叫 componentDidMount
  // componentDidUpdate 也可以寫 setState，但是[必須]要寫在 condition 裡面，以下面範例，若寫在 if 外，會無窮無盡 update

  //如果父層傳來的值會變，就要重新 fetchData，取得資料
  componentDidUpdate(prevProps, prevState, snapshot) {
    //condition
    if (prevProps.userId !== this.props.userId) {
      this.fetchData();
      this.setState({

      })
    }
  }

  fetchData = (userId) => {
    // fetch(`http://mysite.com/api/user/${userId}`)
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({
    //     userData: data
    //   })
    // })
  }


  render() {
    const { userData } = this.state
    return (
      <div>
        生命週期函式 componentDidUpdate 常見使用方式
        <img src={userData.img} />
        <label>{userData.name}</label>
      </div>
    )
  }
}

export default Update;