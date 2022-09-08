import React, { Component } from "react";
import CourseListChild from './CourseListChild'

// const api = 'https://api.hiskio.com/v1/courses?profession?type=all&level=all&sort=latest';

const api = 'https://api.hiskio.com/v1/courses?profession%3Ftype=all&level=all&sort=latest&page=1'

class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
      next: null,
      loading: true
    }
  }
  
  componentDidMount() {
    this.fetchData(api);
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  // scrollY => 卷到哪
  // innerHeight => 視窗高度
  // scrollHeight => 總共可以卷多高
  onScroll = () => {

    const { next, loading } = this.state
    if (loading) return;
    if (!next) return
    if (
      window.scrollY + 
      window.innerHeight >=
      document.body.scrollHeight -100
    ) {
      this.fetchData(next)
    }
  }

  fetchData = (url) => {
    this.setState({
      loading: true,
    });
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        // courses: data.data,
        courses: [...this.state.courses, ...data.data],
        next: data.links.next,
        loading: false
      })
    })
  }

  render() {
    const { courses } = this.state;
    return (
      <div>
        {
          courses.map((course) => (
            <CourseListChild key={course.id} {...course} />
          ))
        }
      </div>
    )
  }
}

export default CourseList;