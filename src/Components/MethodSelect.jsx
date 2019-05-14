import React, { Component } from 'react';

class MethodSelect extends Component {
  

  render() {
    return (
      <select id="method" onChange= {this.props.onChangeValue}>
        <option value="metric" >metric</option>
        <option value="imperial" >imperial</option>
      </select>
    )
    
  }
}

export default MethodSelect