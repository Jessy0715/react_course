import React, { Component } from "react";
import names from './names.json'

const withName = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                items: names,
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
            this.setState(({text}) => ({
                items: !text ? names : names.filter((name) => name.includes(text)) 
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


export default withName;