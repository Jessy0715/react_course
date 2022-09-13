import React, { Component } from "react";

// 1.純前端 filter 作法
// import lessons from './lessons.json'

class FilterList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // lessons, //1.純前端 filter 作法
      lessons: [], //2.後端寫法傳入 lessons
      filter: ''
    }
  }
  componentDidMount() {
    this.fetchLesson();
  }
  
  onChangeFilter = (e) => {
    const filter = e.target.value;
    this.setState({ filter }, this.fetchLesson)
  }

  fetchLesson = () => {
    clearTimeout(this.timer)
    this.timer = setTimeout(()=> {
      const { filter } = this.state;
      fetch(`/api/lessons?filter=${filter}`)
      .then((res) => res.json())
      .then((lesson)=> this.setState({
        lesson
      }))
    }, 300) // debounce => 在搜尋時等輸入完之後再打 api
  }

  render() {
    const { lessons, filter } = this.state;
    
    // 1.純前端 filter 作法: 在 render 裡面做 filter
    const filterLessons = lessons.filter((lesson) => (
      lesson.title.toLowerCase().includes(filter.toLowerCase())
    ))

    return (
      <div>
        <input value={filter} onChange={this.onChangeFilter} />
        <ul>
          {
            lessons.map((lesson) => (<li key={lesson.id}>{lesson.title}</li>))
          }
        </ul>
      </div>
    )
  }
}

export default FilterList;