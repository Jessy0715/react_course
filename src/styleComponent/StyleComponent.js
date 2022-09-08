import React from "react";

// 1. 一般常見的 react css 寫法，就是引入 css
// import "./styleComponent.css";

// 2. 安裝 styled-components 操作使用
import styled from 'styled-components';
const Button = styled.button`
  background-color: orange;
  color: #000;
  width: 250px;
  font-size: 1em;
  padding: 2rem;
  border-radius: 5px;
`
const ButtonText = styled.span`
  color: #fff;
`

// 因為只有return 簡短一行，因此現在看到的是 return 拿掉後的縮寫模式，並帶入解構後的參數

const StyleComponent = ({ children }) => (
  // 1. 一般常見的 react css 寫法
  // <button className="btn">
  //   <span className="btnText">{children} </span>
  // </button>

  // 2. 安裝 styled-components 操作使用
  <Button>
    <ButtonText>{children} </ButtonText>
  </Button>
);

export default StyleComponent;
