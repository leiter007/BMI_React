import React, { Component } from 'react';
import DisplayResult from './Components/displayResult.jsx';
import { Container, Divider, Header} from 'semantic-ui-react';
// import MethodSelect from './Components/methodSelect';

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
        <Container textAlign='center'>
            <Header as='h1'>BMI Calculator</Header>
        </Container>

          <Divider horizontal>TRY IT!</Divider>

        {/* <MethodSelect
        onChangeValue={this.setUnits.bind(this)}
        /> */}

        <select id="method" onChange= {this.setUnits.bind(this)}>
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
      </>
    );
  }
}

export default App;
