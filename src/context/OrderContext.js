import { createContext } from "react";

// 一開始要建立模組，在模組裡面去 createContext

// 2.使用 OrderContext 寫法- 只傳 orders
// const context = createContext([]);

// 3.使用 OrderContext 寫法- orders 與 addOrder
const context = createContext({
  // 預設為空陣列與空函式
  orders: [],
  addOrder: () => {}
});

export default context;