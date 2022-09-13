import React from "react";
import Product from "./Product";

const Products = [
  { id: 1, name: "牛肉鍋" },
  { id: 2, name: "豬肉鍋" },
  { id: 3, name: "羊肉鍋" },
  { id: 4, name: "雞肉鍋" },
  { id: 5, name: "好肉鍋" },
];

// 1.原始寫法
// const ProductList = ({addOrder}) => (
//   <ul>
//     {
//       Products.map((product) => <Product addOrder={addOrder} key={product.id} {...product} />)
//     }
//   </ul>
// )

// 3.使用 OrderContext 寫法- orders 與 addOrder
// 把 addOrder 拿掉

const ProductList = () => (
  <ul>
    {Products.map((product) => (
      <Product key={product.id} {...product} />
    ))}
  </ul>
);

export default ProductList;
