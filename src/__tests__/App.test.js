import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';

import App from '../App.js';

describe('<App />', () => {
  it('renders header', () => {
    const component = shallow(<App />);
    const header = <h1>BMI Calculator</h1>;
    expect(component.contains(header)).toEqual(true);
  });

  it('shows metric as the standard method', () => {
    const component = shallow(<App />);
    const weightLabel = <label>Weight(kg)</label>;
    const heightLabel = <label>Height(cm)</label>;
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })

  // it('can change method', () => {
  //   const onChangeValue = stub();
  //   const component = shallow(<App onChangeValue={onChangeValue} />);
  //   const weightLabel = <label>Weight(lbs)</label>;
  //   const heightLabel = <label>Height(inches)</label>;
  //   component.find("MethodSelect").prop('onChangeValue')({target: {value:'imperial'}});
  //   expect(component.contains(weightLabel)).toEqual(true);
  //   expect(component.contains(heightLabel)).toEqual(true);
  // })
})