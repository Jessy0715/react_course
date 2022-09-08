import React, { Component } from "react";
import style from './Course.module.css'

class CourseListChild extends Component {
  constructor(props) {
    super(props)

  }


  render() {
    const {
      title,
      thumbnails: { w300 },
      lecturers,
    } = this.props;
    return (
      <div style={{ margin: '50px 0', background: '#9ccbcc'}}>
      <main style={{padding: '20px 0 5px 0'}}>
        <div className={style.cover} style={{
          background:`url('${w300}')`
        }} />
      </main>
        <div className={style.info}>
          <div className={style.title}>{title}</div>
          {
            lecturers.map((lecturer) => (
              <label key={lecturer.id}>{lecturer.username}</label>
            ))
          }
        </div>
      </div>
    )
  }
}

export default CourseListChild;