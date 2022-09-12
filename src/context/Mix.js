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
    const { orders } = this.state
    return (
      <div>
        {/* <Header orders={orders} />
        <ProductList addOrder={this.addOrder} /> */}

        {/* 使用 OrderContext 寫法 */}
        <OrderContext.Provider value={orders}>
          <Header />
          <ProductList addOrder={this.addOrder} />
        </OrderContext.Provider>
      </div>
    )
  }
}

export default Mix;