import React, { Component } from 'react';
import DisplayResult from './Components/displayResult.jsx';
import { Container, Divider, Segment} from 'semantic-ui-react';

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
        this.setState({weightUnit: 'lbs', heightUnit: 'inches', weight: '', height: ''})
      } else if (this.state.method === 'metric') {
        this.setState({weightUnit: 'kg', heightUnit: 'cm', weight: '', height: ''})
      }
    })
  }

  render() {
    return (
      <>
        <Segment.Group>
          <Container textAlign='center'>
              <h1>BMI Calculator</h1>
              <p>Select "metric" or "imperial" in the drop-down. Then enter you weight and height in the correct unit type to calculate your BMI!</p>
          </Container>

            <Divider horizontal>TRY IT!</Divider>

          <Segment.Group>
            <Segment>
              <select placeholder='Select metric or imperial' id="method" onChange= {this.setUnits.bind(this)}>
                <option value="metric" >metric</option>
                <option value="imperial" >imperial</option>
              </select>
            </Segment>

            <Segment>
              <label>Weight({this.state.weightUnit})</label>
              <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })}></input>
            </Segment>

            <Segment>
              <label>Height({this.state.heightUnit})</label>
              <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value})}></input>
            </Segment>

            <Segment>
              <DisplayResult
                weight={this.state.weight}
                height={this.state.height}
                method={this.state.method}
              />
            </Segment>
          </Segment.Group>
        </Segment.Group>
      </>
    );
  }
}

export default App;
