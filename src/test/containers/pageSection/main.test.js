import React from 'react';
import {shallow} from 'enzyme';

import Main from '../../../components/containers/pageSection/main';

describe('<Main />', () => {
    it('Renders without crashing.', () => {
        shallow(<Main />);
    });
});
