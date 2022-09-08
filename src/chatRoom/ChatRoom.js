import React, { Component } from "react";


class ChatRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      content: []
    }
  }

  onChangeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { text, content} = this.state
    this.setState({
      text: '',

      // key 值不可能是text，因為輸入內容有可能重複，也不可能是index，因為陣列 index 會不斷新增而更新，因此設 id 才是保險作法
      // content: [text, ...content]
      content: [{id: Date.now(), text}, ...content]
    })
    // console.log('content', content);
  }


  render() {
    const {text, content} = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={text} onChange={this.onChangeText} />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {
            content.map((ele) => (
              <li key={ele.id}>{ele.text}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default ChatRoom;