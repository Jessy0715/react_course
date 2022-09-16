import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {

  // 使用時機: 要使用同一個 ref，如果使用 createRef，會建立一個新的 ref
  // 在第一次呼叫的時候會建立這個 ref 物件，接下來再呼叫同個 useRef 的話，他會回傳先前建立好的 ref
  
  // 範例1
  // const ref = useRef();
  // useEffect(()=> {
  //   ref.current.focus();
  // }, [])
  // return (
  //   <input ref={ref} />
  // )


  // 範例2
  // 名字(id)可以自己取


  // let interval // => 不可以在這裡新設立變數，因為會變成全局使用
  const [count, setCount] = useState(0);
  const ref = useRef({});

  // let interval  // => 不可以在這裡新設立變數，因為函式在執行的時候，他都會是新的變數，他不會跟隨著 UseRef 這個組件 (這不是我們所希望的)
  const startCounter = () => {
    ref.id = setInterval(() => {
      setCount(c => c + 1)
    },100)
  }
  const stopCounter = () => {
    clearInterval(ref.id)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={startCounter}>start</button>
      <button onClick={stopCounter}>stop</button>
    </div>
  )
}

export default UseRef;