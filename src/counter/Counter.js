import React, {Component} from 'react';
import CounterChild from './CounterChild';
import MapChild from './MapChild';
import KeyChild from './KeyChild';
import PropTypes from 'prop-types'


//  map 列表渲染-- 陣列ren 成元素
const listItem = [
  '11',
  '22',
  '33'
]

// map 列表渲染-- 物件ren 成元素 => 要注意列表不保證順序會照宣告的順序
const info = {
  name: 'jessy',
  price: 1000,
  teacher: 'albie'
}

// map 列表渲染-- 物件ren 成元素 => 如果列表需要順序，資料結構首先要預設好，像 info2的樣子
const info2 = [
  {label: 'name' , data: 'jessica'}, 
  {label: 'price' , data: 1000}, 
  {label: 'teacher', data: 'jacky' }
]

class Counter extends Component {
  // 進階 props 使用: 若父層沒傳入預設值，預設值就會是 defaultProps 裡的 initCount
  // 2種寫法: 1. 寫 static  2. 寫在外層 Counter.defaultProps
  static defaultProps = {
    initCount: 20
  }
  // 進階 props 使用: 確保父層傳入值為'數字'做防呆
  //2種寫法: 1. 寫 static  2. 寫在外層 Counter.propTypes
  static propTypes = {
    initCount: PropTypes.number
  }


  constructor(props) {
    super(props);
    this.state = {
      count: props.initCount, //盡量避免此寫法，除非 props 在更新的時候，不會更新到 render，父層傳來的 props 只會第一次有效，後面 props 的更新都不管，就可以把 props 存在 state 裡面
      // 助教解釋: 如果上層的props更新後，state 不會重新給 set ，constructor 只會執行一次，所以如果是我寫的話我也會避免這個寫法情況
      count2: 1,
      step: 1,
      list: [
        {label: 'name' , data: 'scars'}, 
        {label: 'price' , data: 1000}, 
        {label: 'teacher', data: 'milly' }
      ]
    }
    //下面此行要搭配 addCount 的一般函式; 若刪除此行，addCount 要改為箭頭函式
    this.addCount = this.addCount.bind(this);
    this.addMultiCount = this.addMultiCount.bind(this);
  }

  addCount() {
    // setState 是一個非同步的操作，寫法有 2種，參考文章: 
    // https://medium.com/@brianwu1201/learn-basic-react-setstate-function-2aec5018a38a
    
    // 2.傳入函式- 傳統寫法
    // this.setState((state) => {
    //  console.log(state) 
    //   return {
    //     count: state.count+1
    //   }
    // })

    // 2.傳入函式- 縮寫寫法，意思一樣是 return 物件; state 參數是上面的 this.state 物件
    this.setState((state) => ({
      count: state.count+1
    }))
    
    // 1.傳入物件寫法
    // setState 有 partial state 概念: 即使 state 有很多屬性，setState 可以只改其中一個屬性，其他沒有寫的屬性不會被影響
    // this.setState({
    //   count: this.state.count+1
    // })


    // 情境: 更改 count後再打 API; 此寫法是 count 被更新後才 sendCount; 目的一樣處理非同步問題
  //   this.setState({
  //     count: this.state.count+1
  //   },
  //   ()=> {
  //     this.sendCount()
  //   })
  // }

  // sendCount() {
  //   fetch(`/api/count?value=${this.state.count}`)
  }
  // 帶入解構寫法
  addMultiCount() {
    const {count2, step} = this.state
    this.setState({
      count2: count2 + step,
      step: step + 1
    })
  }

  removeFirst = () => {
    this.setState({
      list: this.state.list.slice(1)
    })
  }

  render() {
    const {count2, step} = this.state
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}>Add count</button>
        <br />

        {/* 帶入解構 */}
        <h1>{count2}</h1>
        <button onClick={this.addMultiCount}>+ {step}</button>

        {/* props 傳值，可以是任何型態，也可以是 children */}
        <ul>
          <CounterChild text="An apple a day" price={100} />
          <CounterChild>Go doctor away</CounterChild>
        </ul>
        {/* map 列表渲染-- 陣列ren 成元素*/}
        {/* <ul style={{border: '1px solid #fff'}}>
          {listItem.map((text, index) => <MapChild>{text}--{index}</MapChild>)}
        </ul> */}
        {/* map 列表渲染-- 物件ren 成元素 => 要注意列表不保證順序會照宣告的順序 */}
        <ul style={{ border: '1px solid orange'}}>
          {Object.keys(info).map(key => {
            const value = info[key]
            return <MapChild>{key}: {value}</MapChild>
          })}
        </ul>
          {/* map 列表渲染-- 物件ren 成元素 => 如果列表需要順序，資料結構首先要預設好，像 info2的樣子 */}
        {/* <ul style={{ border: '1px solid lightblue'}}>
          { info2.map(item => <MapChild>{item.label}: {item.data}</MapChild>)}
        </ul> */}


          {/* map 列表渲染-- 解構寫法 + 探討 key的重要性 
          1. 有 id 當作 key 是最好
          2. 若沒有 id，最下下策只能用 map 裡的參數 index，但還是會影響效能
          3. 若沒有 id，可以找資料裡面獨一無二的屬性當作 key
          4.key 要多 unique? 只要在 parent 裡面獨一無二就可以了。意思就是儘管複製兩個 keyChild 組件，看起來有一模一樣的 key，也不會衝突影響效能
          */}
        <ul style={{ border: '1px solid pink'}}>
          { this.state.list.map(({label, data}) => (<KeyChild key={label} text={`${label}: ${data}`} /> ))}
        </ul>
        <button onClick={this.removeFirst}>刪除第1列項</button>
      </div>
    )
  }
}

// Counter.defaultProps = {
//   initCount: 20
// }

// Counter.propTypes = {
//   initCount: propTypes.number
// }

export default Counter;