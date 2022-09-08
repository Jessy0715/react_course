import React, { Component } from "react";
import "./card.css";
import CardTeacher from './CardTeacher';
import CardDesc from './CardDesc';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, desc, like, students, price, teacher, video } =
      this.props.data;

    return (
      <div className="card">
        <h2 className="card__title">{title}</h2>
        <CardDesc>{desc}</CardDesc>
        <section className="card__stats">
          <div className="card__stat">
            <label>好評</label>
            {like}
          </div>
          <div className="card__stat">
            <label>學生</label>
            {students}
          </div>
          <div className="card__stat">
            <label>價格</label>
            {price}
          </div>
          <div className="card__stat">
            <label>教師</label>
            <CardTeacher data={teacher} />
          </div>
        </section>

        <video className="card__video" src={video.source} poster={video.poster} controls />
      </div>
    );
  }
}

export default Card;
