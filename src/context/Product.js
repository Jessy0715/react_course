import React from "react";

import OrderContext from './OrderContext';

// 1.原始寫法
// const Product = ({id, name , addOrder}) => (
//   <li>
//     <label>{ name }</label>
//     <button onClick={() => addOrder(id)}>+</button>
//   </li>
// )


// 3.使用 OrderContext 寫法- orders 與 addOrder
const Product = ({id, name , addOrder}) => (
  <li>
    <label>{ name }</label>
    <OrderContext.Consumer>

      {
        value => (
        <button onClick={() => value.addOrder(id)}>+</button>
        )
      }
    </OrderContext.Consumer>
  </li>
)


export default Product;