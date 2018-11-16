import React from 'react';
import {shallow} from 'enzyme';

import Header from '../../../components/containers/pageSection/header';
describe('<Header />', () => {
    it('Renders without crashing.', () => {
        shallow(<Header />);
    });
});
