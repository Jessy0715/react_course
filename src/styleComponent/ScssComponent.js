import React from "react";

// 1. 用 scss 寫法需安裝 node-sass
// import './scssComponent.scss';

// 2. 命名為 module.scss，寫法會與一般scss 不同之外，module 主要解決如果出現相同 className 時，css 覆蓋的問題，可利用 console 去看 className 後面會出現簡短的 hash 亂碼，以利做區分
import style from './scssComponent.module.scss'

const ScssComponent = ({children}) => (
  // 1. 用 scss 寫法需安裝 node-sass
  // <button className="btn">
  //   <span className="btn__text">{children} </span>
  // </button>

<button className={style.btn}>
  <span className={style.btn__text}>{children} </span>
</button>
)

export default ScssComponent;