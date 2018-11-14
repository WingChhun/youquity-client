import React from 'react';
import {shallow} from 'enzyme';

import Nav from '../../components/layout/nav';
describe('<Nav />', () => {
    it('Renders without crashing.', () => {
        shallow(<Nav />);
    });
});
