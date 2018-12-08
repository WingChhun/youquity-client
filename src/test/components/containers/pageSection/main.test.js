import React from 'react';
import {shallow} from 'enzyme';

import Main from '../../../../components/containers/pageSection/main';

import { Route, Switch } from 'react-router-dom';

describe('<Main />', () => {
    it('Renders without crashing.', () => {
        shallow(<Main />);
    });
    it('Renders a Switch and one or more Routes', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.contains([Switch, Route]));
    });
});
