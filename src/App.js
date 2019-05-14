import React, { Component } from 'react';
import DisplayResult from './Components/displayResult.jsx';
// import MethodSelect from './Components/methodSelect';
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

  setUnits(e) {
    this.setState({ method: e.target.value}, () =>{
      if (this.state.method === 'imperial') {
        this.setState({weightUnit: 'lb', heightUnit: 'in'})
      } else if (this.state.method === 'metric') {
        this.setState({weightUnit: 'kg', heightUnit: 'cm'})
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>

        {/* <MethodSelect
        onChangeValue={this.setUnits.bind(this)}
        /> */}

        <select id="method" onChange={this.setUnits.bind(this)}>
          <option value="metric" >metric</option>
          <option value="imperial" >imperial</option>
        </select>

        <div>
          <label>Weight({this.state.weightUnit})</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })}></input>
        </div>

        <div>
          <label>Height({this.state.heightUnit})</label>
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
