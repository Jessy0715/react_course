import React, { Component } from "react";

const relationArr = ["父", "母", "子", "女"];

const relationArr2 = [
  { label: "忠", value: 0 },
  { label: "孝", value: 1 },
  { label: "仁", value: 2 },
  { label: "愛", value: 3 },
];
class FormIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "input text",
      txtArea: "textarea",
      count: 0,
      rel: relationArr[0],
      rel2: `${relationArr2[0].value}`,
      gender: "male",
      like: {
        male: false,
        female: false
      },
      img: '',
      file: null
    };
  }
  onChange = (e) => {
    this.setState({
      txt: e.target.value,
    });
  };

  onChangeTextArea = (e) => {
    this.setState({
      txtArea: e.target.value,
    });
  };

  onChangeCount = (e) => {
    this.setState({
      count: parseInt(e.target.value, 10),
    });
  };

  onChangeSelect = (e) => {
    this.setState({
      rel: e.target.value,
    });
  };

  onChangeSelect2 = (e) => {
    this.setState({
      rel2: e.target.value,
    });
  };

  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  // 物件解構 原本的 + 選中的
  onChangeLike = (e) => {
    const key = e.target.value
    this.setState((state)=> ({
      like: {
        ...state.like,
        [key]: !state.like[key]
      }
    }))
  }

  onChangeFile = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0]
    const fr = new FileReader()
    fr.addEventListener('load', this.fileLoad)
    fr.readAsDataURL(file)
    this.setState({
      file
    })
  }

  fileLoad = (e) => {
    // console.log(e.target);
    this.setState({
      img: e.target.result
    })
  }

  submitImg = () => {
    // 依照伺服器所接收的檔案去傳送
    //json or base64
    // axios.post('/img', {img: this.state.img})

    // multipart
    // const form = new FormData()
    // form.append(this.state.file)
    // axios.post('/img', {from})
  }
  render() {
    const { txt, txtArea, count, rel, rel2, gender, like, img } = this.state;
    return (
      <div>
        <h2>form</h2>
        {/* input 最重要是雙向綁定=> value 跟 onChange */}
        <input type="text" value={txt} onChange={this.onChange} />
        <div>{txt}</div>
        <hr />
        <textarea
          type="text"
          value={txtArea}
          onChange={this.onChangeTextArea}
        />
        <div>{txtArea}</div>
        <hr />
        {/* input value 永遠是字串，所以型別要自己去轉換 */}
        <input type="number" value={count} onChange={this.onChangeCount} />
        <div>next: {count + 1}</div>
        <hr />
        <div>下拉選單</div>
        {/* select: 資料結構為一般版本
        注意雙向綁定 value 跟 onChange，option 要帶入 key
         */}
        <select value={rel} onChange={this.onChangeSelect}>
          {relationArr.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <div>{rel}</div>
        {/* select: 資料結構為陣列帶物件的常見版本 
        option value 為數字(後端需求)，前端要轉為文字
        **注意型別判別問題**，可以用 == / 強制都轉為字串型別
         */}
        <select value={rel2} onChange={this.onChangeSelect2}>
          {relationArr2.map((item) => (
            <option key={item.label} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <div>{relationArr2.find((item) => `${item.value}` === rel2).label}</div>
        <hr />
        <div>Radio</div>
        Your gender:
        <input type="radio" value="male" onChange={this.onChangeGender} checked={ gender === 'male'} />
        <label>Male</label>
        <input type="radio" value="female" onChange={this.onChangeGender} checked={ gender === 'female'} />
        <label>Female</label>
        <pre>{ JSON.stringify(gender)}</pre>
        <hr />
        <div>Checkbox</div>
        You like:
        <input type="checkbox" value="male" onChange={this.onChangeLike} checked={ like.male } />
        <label>Male</label>
        <input type="checkbox" value="female" onChange={this.onChangeLike} checked={ like.female } />
        <label>Female</label>
        <pre>{ JSON.stringify(like)}</pre>
        <hr />
        <div>input file</div>
        <input type="file" onChange={this.onChangeFile} />
        <img width="300px" src={img} />
        <button onClick={this.submitImg}>Submit</button>
      </div>
    );
  }
}

export default FormIntro;
