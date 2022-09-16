import React, { useContext } from "react";


// 使用 useContext 不用再將 Consumer 解構引入進來
import context from './Context';

const UseContextBtn = () => {
  const contextValue = useContext(context);
  // console.log(contextValue);

  // contextValue 是指包著這個組件最近的 Provider，不是隨便一個 Provider
  const { open, toggle } = contextValue;
  return (
    <button onClick={toggle}>
      {open? 'Close' : 'Open'}
    </button>
  )

}

export default UseContextBtn;