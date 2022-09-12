import React, { Component } from "react";

class ErrorChild extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    // JSON.parse('dfgs') //抓的到error
    Promise.rerject('test') //抓不到此error
  }

  render() {
    return (
      <div>
        ErrorChild
      </div>
    )
  }
}

export default ErrorChild;