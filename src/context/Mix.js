import React, { Component } from "react";
import Header from './Header';
import ProductList from './ProductList';

import OrderContext from './OrderContext';

class Mix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
  }

  addOrder = (order) => {
    this.setState({
      orders: [...this.state.orders, order]
    })
  }

  render() {
    const { orders } = this.state;

    // 3.使用 OrderContext 寫法- orders 與 addOrder
    const contextValue = {
      orders,
      addOrder: this.addOrder
    }
    return (
      <div>
        {/* 
        1.原始寫法
        <Header orders={orders} />
        <ProductList addOrder={this.addOrder} /> 
        
        */}

        {/* 2.使用 OrderContext 寫法- 只傳 orders */}
        {/* <OrderContext.Provider value={orders}>
          <Header />
          <ProductList addOrder={this.addOrder} />
        </OrderContext.Provider> */}

        {/* 3.使用 OrderContext 寫法- orders 與 addOrder */}
        <OrderContext.Provider value={contextValue}>
          <Header />
          <ProductList />
        </OrderContext.Provider>
      </div>
    )
  }
}

export default Mix;