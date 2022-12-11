import React, { Component } from "react";

const upgrades = [
  {
    name: "Grandma",
    price: 10,
    auto: 1,
  },
  {
    name: "Farm",
    price: 100,
    auto: 8,
  },
  {
    name: "Mine",
    price: 1000,
    auto: 60,
  },
];

class Cookie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: 1000,
      auto: 0,
      upgrades,
      // priceGrandma: 10, //改用upgrades 寫法
      // priceFarm: 100 //改用upgrades 寫法
    };
  }

  // 講師補充: this.time 可視為一個實例變數(instance variable)，用來儲存 timeout id，組件並不依賴他做更新，因此不需要設計為 state，以避免可能的流程問題

  componentDidUpdate() {
    this.time = Date.now();
    this.updateCookie();
  }

 // componentDidMount() {
    // 講師補充: 目的:「為組件設置一個每秒更新的 timeout」，要達成這件事情，我們要在組件建立之後，做一個一次性的設定，因此在 componentDidMount 裡面去做，假如我們的目的是在組件每次更新之後去檢查 props 或 state 並做對應的動作，那麼才是使用 componentDidUpdate
    
    // this.autoStep();
  // }

  // autoStep = () => {
  //   this.setState(({ cookies, auto }) => ({
  //     cookies: cookies + auto,
  //   }));

  //   setTimeout(this.autoStep, 1000);
  // };
  
  // 原本為 autoStep
  updateCookie = () => {
    const { cookies, auto } = this.state;
    const time = Date.now();

    // 每一毫秒過了多少時間
    const step = (auto / 1000) * (time - this.time);
    this.time = time;

    this.setState(
      {
        cookies: cookies + step,
      },
      () => requestAnimationFrame(this.updateCookie),
    );
  };

  addCookie = () => {
    this.setState({
      cookies: this.state.cookies + 1,
    });
  };
  // buyGrandma = () => {
  //   const {cookies, auto, priceGrandma: price} = this.state
  //   if (cookies < price) return
  //   this.setState({
  //     cookies: cookies - price,
  //     auto: auto + 1,
  //     priceGrandma: price*1.15
  //   });
  // };
  // buyFarm = () => {
  //   const {cookies, auto, priceFarm: price} = this.state
  //   if (cookies < price) return
  //   this.setState({
  //     cookies: cookies - price,
  //     auto: auto + 8,
  //     priceFarm: price*1.15
  //   })
  // }

  // 合併 buyGrandma 與 buyFarm
  update = (idx) => {
    const { cookies, auto, upgrades } = this.state;
    const u = upgrades[idx];
    if (cookies < u.price) return;
    this.setState({
      cookies: cookies - u.price,
      auto: auto + u.auto,
      upgrades: upgrades.map((ele, i) =>
        i !== idx ? ele : { ...ele, price: ele.price * 1.15 }
      ),
    });
    // console.log('auto',auto)
  };

  render() {
    const { cookies, priceGrandma, priceFarm, upgrades } = this.state;
    return (
      <div>
        <div>Cookies</div>
        {parseInt(cookies, 10)}
        <hr />
        <button onClick={this.addCookie}>Click</button>
        <br />
        {/* <br />
        <button onClick={this.buyGrandma}>Grandma</button>{ parseInt(priceGrandma,10) }
        <button onClick={this.buyFarm}>Farm</button> { parseInt(priceFarm,10) } */}

        {/* ****  return 陣列方式寫法 **** */}
        {upgrades.map(({ name, price }, idx) => [
          <button onClick={() => this.update(idx)}>{name}</button>,
          <span>{parseInt(price, 10)}</span>,
          <br />,
        ])}
      </div>
    );
  }
}

export default Cookie;
