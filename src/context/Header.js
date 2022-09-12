import React, { Component } from "react";

import OrderContext from './OrderContext';

const Header = ({orders = []}) => (
  <div>
    {/* <span>{`購物車(${orders.length})`}</span> */}

    {/* 使用 OrderContext 寫法，子組件要改寫成函式，作為 children */}
    <OrderContext.Consumer>
      { (value) => (
        `購物車(${value.length})`
      )}
    </OrderContext.Consumer>

    <hr />
  </div>
)

export default Header;