import React from 'react';
import {shallow} from 'enzyme';

import {AddShareClass} from '../../../components/containers/view/addShareClass';

describe('<AddShareClass />', () => {
    it('Renders without crashing.', () => {
        shallow(<AddShareClass />);
    });
});
