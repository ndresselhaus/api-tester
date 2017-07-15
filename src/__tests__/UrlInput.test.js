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

  wrapper.find('input[type="text"]').simulate('change', { target: { value: 'http' } });
  expect(wrapper.state()).toEqual({ url: 'http' });
});