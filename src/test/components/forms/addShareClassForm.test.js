import React from 'react';
import {shallow} from 'enzyme';

import {AddShareClassForm} from '../../../components/forms/addShareClassForm';

import {Field} from 'redux-form';

describe('<AddShareClassForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<AddShareClassForm />);
    });
    it('Renders one or more Field elements', () => {
        const wrapper = shallow(<AddShareClassForm />);
        expect(wrapper.find(Field).length).toBeGreaterThanOrEqual(1);
    });
    it('Calls the handleSubmit function on submit', () => {
        const handleSubmit = jest.fn();
        const wrapper = shallow(<AddShareClassForm handleSubmit={handleSubmit} />);
        wrapper.simulate('submit');
        expect(handleSubmit).toHaveBeenCalled();
    });
});
