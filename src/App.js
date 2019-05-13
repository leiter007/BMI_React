import React, { Component } from 'react';
import DisplayResult from './Components/displayResult.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: ''
    }
  }

  render() {
    return (
      <div className="App">
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
