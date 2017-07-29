import React from 'react';
import ReactDOM from 'react-dom';
import UrlInput from '../UrlInput';
import { shallow } from 'enzyme';


it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UrlInput url={''} onChange={() => {}} />, div);
});

it('uses url to populate input', () => {
  const url = 'http://test.com';
  const wrapper = shallow(<UrlInput url={url} onChange={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

it('calls onChange for text changes', () => {
  const stub = jest.fn();
  const wrapper = shallow(<UrlInput url={''} onChange={stub} />);

  const event = { target: { value: 'http' } };
  wrapper.find('input[type="text"]').simulate('change', event);
  expect(stub.mock.calls[0][0]).toEqual(event);
});