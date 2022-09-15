import React, { useState } from "react";


// 注意寫法:
// 1.不可以寫在邏輯(if) 判斷裡面
// 2.state 裡面要把新舊 state 通通寫出來，不能只寫要改變的屬性(在 Class Component 可以這樣寫，會自動合併所有剩餘 state 屬性)，不然會出現錯誤，如範例2


// Functional Component
// const UseState = () => {
//   const [count, setCount] = useState(0);

//   const addCount = () => {
//     // setCount(count + 1) //一般寫法
//     setCount((c) => c+1) //函式寫法
//   }

//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={addCount}>Add</button>
//     </div>
//   )
// }



// 範例2
const UseState = () => {
  const [ {count1, count2}, setState ] = useState({ count1: 0, count2: 0});

  const addCount1 = () => {
    setState((state) => ({
      ...state, count1: state.count1 + 1
    }))
  }

  const addCount2 = () => {
    setState((state) => ({
      ...state,
      count2: state.count2 + 1
    }))
  }

  return (
    <div>
      <div>Count1: {count1}</div>
      <div>Count2: {count2}</div>

      <button onClick={addCount1}>Add Count 1</button>
      <button onClick={addCount2}>Add Count 2</button>
    </div>
  )
}

export default UseState;