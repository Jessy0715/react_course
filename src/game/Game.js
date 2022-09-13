import React, { Component } from "react";

import style from "./game.module.css";

// 邏輯思路
// 1.建立 grids 陣列，然後再轉圖像化
// 2.把 css 建構出來套用到 jsx
// 3.新增 player，點擊 grids，讓 O跟X輪流出現
// 4.新增清空按鈕及功能，設定防呆: 已經點擊過的不能再次點擊
// 5.設定 getWinner，需要8條線跑迴圈，設定防呆: 已經有贏家出現，剩下的 grids 就不能再點擊
// ** 注意 ** return 0 是要寫在 for 迴圈外面才是正確的，不然取不到 winner


const toSymbol = (n) => {
  switch (n) {
    case 0:
      return "";
    case 1:
      return "O";
    case -1:
    default:
      return "X";
  }
};

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      player: 1,
      winner: 0
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.grids !== this.state.grids) {
      this.setState({
        winner: this.getWinner()
      })
    }
  }

  handleClick = (idx) => {
    if (this.state.winner !== 0 ) return;

    const grids = [...this.state.grids];

    if (grids[idx] !== 0) return;

    grids[idx] = this.state.player;
    this.setState({
      grids,
      player: -this.state.player
    })
  }

  reset = () => {
    this.setState({
      grids: [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      player: 1
    })
  }

  getWinner = () => {
    const { grids } = this.state;
    for (const line of lines) {
      const [i, j, k] = line

      if (grids[i] === grids[j] && grids[j] === grids[k]) {
        return grids[i];
      }
    }
    return 0;
  }

  render() {
    const { grids, player, winner } = this.state;
    return (
      <div>
        <div className={style.board}>
          {grids.map((n, idx) => (
            <div className={style.grid} onClick={() => this.handleClick(idx)}>
              <span>{toSymbol(n)}</span>
            </div>
          ))}
        </div>
        <div>Player: {toSymbol(player)}</div>
        <div>Winner: {toSymbol(winner)}</div>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Game;
