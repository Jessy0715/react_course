import React, { Component, createRef } from "react";

  // 組件第一次 render到頁面上的時候會執行這個生命週期函式
class Mount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  // componentDidMount => fetch 寫法
  // componentDidMount() {
  //   fetch('http://..../api/list')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       items: data
  //     })
  //   })
  // }

  // componentDidMount => async await 寫法
  // async componentDidMount() {
  //   const res = await fetch ('http://..../api/list')
  //   const data = res.json()
  //   this.setState({
  //     items: data
  //   })
  // }

  // componentDidMount => async await 進階簡潔寫法
  // fetchList = async () => {
  //   const res = await fetch ('http://..../api/list')
  //   const data = res.json()
  //   this.setState({
  //     items: data
  //   })
  // }

  // componentDid Mount() {
  //   this.fetchList()
  // }


  render() {
    return (
      <div>
        生命週期函式 componentDidMount 常見使用方式
      </div>
    )
  }
}


// componentDidMount => canvas

// class Canvas extends Component {
//   constructor(props) {
//     super(props)
//   }

//   ref = createRef()
//   componentDidMount() {
//     const ctx = this.ref.current.getContext('2d')
//     ctx.fillStyle = 'red'
//     ctx.fillRect(10,10,30,30)
//   }

//   render() {
//     return (
//       <div>
//         <canvas ref={this.ref} />
//       </div>
//     )
//   }
// }

export default Mount;