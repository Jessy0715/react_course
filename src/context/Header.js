import React from "react";

import OrderContext from './OrderContext';

const Header = ({orders = []}) => (
  <div>
    {/* 1.原始寫法 */}
    {/* <span>{`購物車(${orders.length})`}</span> */}

    {/* 2.使用 OrderContext 寫法- 只傳 orders，子組件要改寫成函式，作為 children */}
    {/* <OrderContext.Consumer>
      { (value) => (
        `購物車(${value.length})`
      )}
    </OrderContext.Consumer> */}

    {/* 3.使用 OrderContext 寫法- orders 與 addOrder */}
    <OrderContext.Consumer>
      { (value) => (
        `購物車(${value.orders.length})`
      )}
    </OrderContext.Consumer>
    <hr />
  </div>
)

export default Header;