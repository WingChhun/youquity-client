import React from 'react';
import {shallow} from 'enzyme';

import {Logout} from '../../../components/containers/view/logout';

describe('<Logout />', () => {
    it('Renders without crashing.', () => {
        shallow(<Logout />);
    });
});
