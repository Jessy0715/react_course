import React, { Component } from "react";


// class CardTeacher extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const {name, link, image} = this.props.data
//     return (
//       <a href={link} className="card__teacher">
//         <img src={image} className="card__avatar" />
//         <span>{name}</span>
//       </a>
//     )
//   }
// }

// 沒有自己的 state 與 methods，可改寫成 Stateless Functional Component
// 因為上面有父層傳入，解構時需要將 data 一併解構
const CardTeacher = ({data: {name, link, image}}) => {
    return (
    <a href={link} className="card__teacher">
        <img src={image} className="card__avatar" />
        <span>{name}</span>
      </a>
    )
}

export default CardTeacher;