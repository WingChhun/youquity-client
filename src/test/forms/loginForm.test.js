import React from 'react';
import {shallow} from 'enzyme';

import LoginForm from '../../components/forms/loginForm';

describe('<LoginForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<LoginForm />);
    });
});
