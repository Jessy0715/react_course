import React, {Component, PureComponent} from 'react';
import './progress.css'


// 組件有 3 種

// 1. Class Component 
// class ProgressBar extends Component {
//   render() {
//     const {value} = this.props
//     console.count('render');
//     return (
//       <>
//       Progress Bar
//       <div className="progress">
//         <div className="progress-done" style={{ width: `${value}%`}}>
//         {value}%
//         </div>
// 		  </div>
//       </>
//     )
//   }
// }

// 2. Stateless Functional Component
// 與 Class Component 差別在於 props 是當作函式的參數傳進來，也不用 render
// 使用時機: 沒有自己的 state 或 methods
// const ProgressBar = (props) => {
  
//   const {value} = props
//   console.count('render');
//   return (
//     <>
//     Progress Bar
//     <div className="progress">
//       <div className="progress-done" style={{ width: `${value}%`}}>
//       {value}%
//       </div>
//     </div>
//     </>
//   )
// }


// 3.PureComponent: 可以增加效能
// 使用時機: props裡面的值沒有改變，不重新render的時候
// 講師補充解釋: PureComponent 處理的是 props，即使上層重新 render, 只要傳給 PureComponent 的 props 沒有改變，PureComponent 就不會重新 render，資訊卡範例的 Component 裡面會改變的是 state
// shallow compare: 判斷 props / state 是否一樣，以物件來說，只會判斷到第一層，若物件一樣的話，就不會 render
// 參考文章: https://medium.com/@xyz030206/react-%E6%95%88%E8%83%BD%E5%84%AA%E5%8C%96-purecomponent-f971fb56f90a
class ProgressBar extends PureComponent {
  render() {
    const {value} = this.props
    console.count('render');
    return (
      <>
      Progress Bar
      <div className="progress">
        <div className="progress-done" style={{ width: `${value}%`}}>
        {value}%
        </div>
		  </div>
      </>
    )
  }
}



export default ProgressBar