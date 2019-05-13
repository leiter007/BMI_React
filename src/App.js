import React, { Component } from 'react';
import DisplayResult from './Components/displayResult.jsx';
import { selector } from 'postcss-selector-parser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric',
      weightUnit: 'kg',
      heightUnit: 'cm'
      
    }
  }

  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>

        <div>
          <select id="method" onChange={(e) => this.setState({ method: e.target.value })}>
            <option value="metric" >metric</option>
            <option value="imperial" >imperial</option>
          </select>
        </div>

        <div>
          <label>Weight<div>{this.state.weightUnit}</div></label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })}></input>
        </div>

        <div>
          <label>Height<div>{this.state.heightUnit}</div></label>
          <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value})}></input>
        </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          method={this.state.method}
        />
      </div>
    );
  }
}

export default App;
