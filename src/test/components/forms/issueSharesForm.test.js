import React from 'react';
import {shallow} from 'enzyme';

import {IssueSharesForm} from '../../../components/forms/issueSharesForm';

import { Field } from 'redux-form';

const availableClasses = [];

describe('<IssueSharesForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<IssueSharesForm availableClasses={availableClasses} />);
    });
    it('Renders one or more Field elements', () => {
        const wrapper = shallow(<IssueSharesForm availableClasses={availableClasses} />);
        expect(wrapper.find(Field).length).toBeGreaterThanOrEqual(1);
    });
    it('Calls the handleSubmit function on submit', () => {
        const handleSubmit = jest.fn();
        const wrapper = shallow(<IssueSharesForm handleSubmit={handleSubmit} availableClasses={availableClasses} />);
        wrapper.simulate('submit');
        expect(handleSubmit).toHaveBeenCalled();
    });
});
