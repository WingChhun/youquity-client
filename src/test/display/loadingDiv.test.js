import React from 'react';
import {shallow} from 'enzyme';

import Loading from '../../components/display/loadingDiv';

describe('<Loading />', () => {
    it('Renders without crashing.', () => {
        shallow(<Loading />);
    });
});
