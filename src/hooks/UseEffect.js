import React, { Component, useState, useEffect } from "react";


// 原本 Class Component 寫法
// class UseEffect extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       email: '',
//       pic: ''
//     }
//   }

//   componentDidMount() {
//     this.fetchUser();
//   }

//   fetchUser = () => {
//     fetch('https://randomuser.me/api/')
//     .then(rs => rs.json())
//     .then(data => {
//       const [user] = data.results;
//       console.log(user);
//       this.setState({
//         email: user.email,
//         pic: user.picture.medium
//       })
//     })
//   }

//   render() {
//     const {email, pic} = this.state
//     return (
//       <div>
//         <img src={pic} />
//         <div>{email}</div>
//       </div>
//     )
//   }
// }

// useEffect 寫法，換成 function component 會遇到不能使用 this 跟 生命週期 

const UseEffect = () => {
  const [state, setState] = useState({
    email: '',
    pic: ''
  })

  // useEffect 取代 componentDidMount
  // 當每次 render 執行 useEffect，他會去比較傳入的陣列(裡面的值)，跟上次比較所傳入的值是不是一樣。如果一樣，就不會執行裡面的函式，如果不一樣，才會執行裡面的函式
  

  // 如果傳[]，代表每次組件更新時，一樣都傳空[]，也就是陣列內容都一樣，每次都是空的; 唯一有一次不一樣，是在第一次呼叫 useEffect，因為在呼叫前，原本是沒有傳入過空[]的 <沒有傳過，跟傳入空[]是不一樣的意思>


  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(rs => rs.json())
    .then(data => {
      const [user] = data.results;
      console.log(user);
      setState({
        email: user.email,
        pic: user.picture.medium
      })
    })
  }, [])

  const { email, pic} = state;
  return (
    <div>
    <img src={pic} />
    <div>{email}</div>
  </div>
  )
}



// https://ithelp.ithome.com.tw/articles/10218548 詳細解釋文章

// useEffect 取代 componentWillUnmount

// 做 4件事情，有順序
// 1.判斷這次的陣列跟上次是不是一樣
// 2.執行上一次存下來的移除監聽函式 removeEventListener
// 3.執行 onScroll 跟 addEventListener 函式
// 4.把 return 存下來，讓他可以作下次使用

// const UseEffectUnMount = () => {
//   useEffect(()=> {
//     const onScroll = () => {}
//     window.addEventListener('scroll', onScroll)

//     return () => {
//       window.removeEventListener('scroll', onScroll)
//     }

//   }, [])
// }


// 輸出順序會是以下:
// state 改變成 0 => state 改變前 0 => state 改變成 1
// state 改變前 1 => state 改變成 2

const Main = () => {
  const [ count, setCount ] = useState(0)

  useEffect(()=> {
    console.log(`state 改變成 ${count}`);

    return () => {
      console.log(`state 改變前 ${count}`);
    }
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => {setCount(count + 1)}}>Add 1</button>
    </>
  )
}


export default UseEffect;