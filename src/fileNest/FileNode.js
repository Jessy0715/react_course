import React, { Component } from "react";
import './file.css'

class FileNode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { name, files } = this.props;
    const { open } = this.state;

    // 組件裡面可以再塞入組件，不能引用到無窮無盡，一定要設結束的條件
    if (!files) {
      return <li>{name}</li>;
    }
    return (
      <div>
        <div className={`folder ${open? 'open': ''} `} onClick={this.toggle}>{name}</div>
        {open ? (
          <ul>
            {files.map((file) => (
              <FileNode {...file} />
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default FileNode;
