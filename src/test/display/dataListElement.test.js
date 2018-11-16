import React from 'react';
import {shallow} from 'enzyme';

import DataListElement from '../../components/display/dataListElement';

describe('<DataListElement />', () => {
    it('Renders without crashing.', () => {
        shallow(<DataListElement />);
    });
});
