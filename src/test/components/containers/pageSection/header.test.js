import React from 'react';
import {shallow} from 'enzyme';

import Header from '../../../../components/containers/pageSection/header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('<Header />', () => {
    it('Renders without crashing.', () => {
        shallow(<Header />);
    });
    it('renders a fontawesome icon', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains([FontAwesomeIcon]));
    });
});
