import React from 'react';
import {shallow} from 'enzyme';

import Wrapper from '../../components/layout/wrapper';
describe('<Wrapper />', () => {
    it('Renders without crashing.', () => {
        shallow(<Wrapper />);
    });
});
