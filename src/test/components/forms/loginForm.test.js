import React from 'react';
import {shallow} from 'enzyme';

import {LoginForm} from '../../../components/forms/loginForm';

import { Field } from 'redux-form';

describe('<LoginForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<LoginForm />);
    });
    it('Renders one or more Field elements', () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper.find(Field).length).toBeGreaterThanOrEqual(1);
    });
    it('Calls the handleSubmit function on submit', () => {
        const handleSubmit = jest.fn();
        const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} />);
        wrapper.simulate('submit');
        expect(handleSubmit).toHaveBeenCalled();
    });
});
