import React { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <label>Weight(kg)</label>
          <input name="weight"></input>
        </div>

        <div>
          <label>Height(cm)</label>
          <input name="height"></input>
        </div>
      </div>
    );
  }
}

export default App;
