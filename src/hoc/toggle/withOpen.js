import React, { Component } from "react";

const withOpen = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: true,
      };
    }
    toggle = () => {
      this.setState({
        open: !this.state.open,
      });
    };

    render() {
      // 1. hoc 夾帶共用邏輯部分，返回一個 WrappedComponent 組件
      // 2. 記得把 props 撒入進去
      return (
        <WrappedComponent
          open={this.state.open}
          toggle={this.toggle}
          {...this.props}
        />
      );
    }
  };
};

export default withOpen;
