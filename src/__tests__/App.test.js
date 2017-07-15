import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders snapshots with shallow enzyme', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});

it('renders with react-test-renderer', () => {
  expect(renderer.create(<App />).toJSON()).toMatchSnapshot();
});