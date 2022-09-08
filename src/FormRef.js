import React, {Component, createRef} from 'react';


class Input extends Component {
    //ref 屬性用法有3招

    createInputRef = createRef();
    
    // 組件第一次 render到頁面上的時候會執行這個生命週期函式
    componentDidMount() {
        // 1.ref　帶入字串，再用生命週期呼叫，官方宣告未來不支援字串方式
        // this.refs.myInput.focus()

        // 3.利用 createRef 建立
        this.createInputRef.current.focus();
    }

    // 2.ref　帶入函式，再用生命週期呼叫
    // setRef = (input) => {
    //     // 參數 input 指得是 input 的元素
    //     input.focus()
    // }

    render() {
        return (
            <div>
                <h3> Enter Your Name</h3>
                {/* <input type="text" ref="myInput" /> */}
                {/* <input type="text" ref={this.setRef} /> */}
                <input type="text" ref={this.createInputRef} />
            </div>
        )
    }
}




export default Input;