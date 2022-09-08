import React, { Component } from "react";
import names from './names.json'


class NameList extends Component {
  constructor(props) {
    super(props)

    this.state = {
        items: names,
        text: ''
    }
  }

  onChangeText = (e) => {
    this.setState({
        text: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState(({text}) => ({
        items: !text ? names : names.filter((name) => name.includes(text)) 
    }))
  }


  render() {
    const {items, text} = this.state
    return (
      <ul>
        <form onSubmit={this.onSubmit}>
            <input value={text} onChange={this.onChangeText} />
            <button type="submit">Submit</button>
        </form>
        {
            items.map((name) => (<li key={name}>{name}</li>))
        }
      </ul>
    )
  }
}

export default NameList;