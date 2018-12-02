import React from 'react';
import {shallow} from 'enzyme';

import IssueSharesForm from '../../components/forms/issueSharesForm';
describe('<IssueSharesForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<IssueSharesForm />);
    });
});
