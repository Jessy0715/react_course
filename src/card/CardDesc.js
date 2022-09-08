import React, { PureComponent } from "react";

// 原本寫 Component，但因為 props裡面的值沒有改變，因此改成 PureComponent 提升效能
class CardDesc extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }


  render() {
    const {open} = this.state;
    const cn = `card__desc__text ${open? '':'less'}`
    return (
      <div className="card__desc">
        <div className={cn}>
          {this.props.children}
        </div>
        <button className="card__desc__btn" onClick={this.toggle}>
          {open? 'Less': 'More'}
        </button>
      </div>
    )
  }
}

export default CardDesc;