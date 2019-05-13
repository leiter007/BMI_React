import React, { Component } from 'react';
import DisplayResult from './Components/displayResult.jsx';
import { selector } from 'postcss-selector-parser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }

  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>

        <div>
          <select id="method" >
            <option value="metric" onChange={(e) => this.setState({ method: e.target.value })}>metric</option>
            <option value="imperial" onChange={(e) => this.setState({ method: e.target.value })}>imperial</option>
          </select>
        </div>

        <div>
          <label>Weight(kg)</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })}></input>
        </div>

        <div>
          <label>Height(cm)</label>
          <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value})}></input>
        </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
        />
      </div>
    );
  }
}

export default App;
