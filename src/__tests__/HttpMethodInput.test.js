import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import HttpMethodInput from '../HttpMethodInput';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HttpMethodInput httpMethod={''} onChange={() => {}} />, div);
});

it('uses httpMethod to specify request method for request', () => {
  const httpMethod = 'GET';
  const wrapper = shallow(<HttpMethodInput httpMethod={httpMethod} onChange={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

it('calls onChange for text changes', () => {
  const stub = jest.fn();
  const wrapper = shallow(<HttpMethodInput httpMethod={''} onChange={stub} />);

  const event = { target: { value: 'httpMethod' } };
  wrapper.find('select').simulate('change', event);
  expect(stub).toBeCalledWith(event);
});