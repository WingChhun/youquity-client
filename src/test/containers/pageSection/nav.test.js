import React from 'react';
import {shallow} from 'enzyme';

import {Nav} from '../../../components/containers/pageSection/nav';
describe('<Nav />', () => {
    it('Renders without crashing.', () => {
        shallow(<Nav />);
    });
});
