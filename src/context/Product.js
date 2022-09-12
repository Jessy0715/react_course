import React, { Component } from "react";


const Product = ({id, name , addOrder}) => (
  <li>
    <label>{ name }</label>
    <button onClick={() => addOrder(id)}>+</button>
  </li>
)

export default Product;