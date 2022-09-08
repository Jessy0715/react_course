import React, { Component } from "react";

const withTodoList = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                items: [],
                text: ''
            }
          }
        
          onChangeText = (e) => {
            this.setState({
                text: e.target.value
            })
          }
        
          onSubmit = (e) => {
            e.preventDefault();
            this.setState( ({items, text}) => ({
                text: '',
                items: [...items, text]
            }))
          }

          render() {
            const {text, items} = this.state
            return (
                <WrappedComponent
                  {...this.props}
                  text={text}
                  onChangeText={this.onChangeText}
                  items={items}
                  onSubmit={this.onSubmit}
                />
              );
          }
    }
}


export default withTodoList;