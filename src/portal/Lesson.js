import React, { Component } from "react";
import LessonModal from './LessonModal'


class Lesson extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detailVisible: false
    }
  }

  showMore = () => {
    this.setState({
      detailVisible: true
    })
  }


  render() {
    const { detailVisible } = this.state
    return (
      <div>
        <button onClick={this.showMore}>Show More</button>
        {
          detailVisible && <LessonModal />
        }
      </div>
    )
  }
}

export default Lesson;