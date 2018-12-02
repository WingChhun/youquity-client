import React from 'react';
import {shallow} from 'enzyme';

import AddShareClassForm from '../../components/forms/addShareClassForm';
describe('<AddShareClassForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<AddShareClassForm />);
    });
});
