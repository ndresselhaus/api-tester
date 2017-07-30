import React from 'react';
import ReactDOM from 'react-dom';
import ParameterList from '../ParameterList';
import {shallow} from 'enzyme';

const title = 'Test Title';
const params = {a: 1, b: '2'};

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParameterList title={title} onChange={() => {}} />, div);
});

it('renders params and title for snapshot', () => {
    const wrapper = shallow(<ParameterList title={title} params={params} onChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

it('calls onChange for text changes', () => {
    const stub = jest.fn();
    const wrapper = shallow(<ParameterList title={title} params={params} onChange={stub} />);

    const event = {target: {value: 'new value'}};
    wrapper.find('input[type="text"]').first().simulate('change', event);
    expect(stub).toBeCalledWith('a', 'new value');
});