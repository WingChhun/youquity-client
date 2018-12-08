import React from 'react';
import {shallow} from 'enzyme';

import { Logout } from '../../../../components/containers/view/logout';

import { Redirect } from 'react-router-dom';

describe('<Logout />', () => {
    it('Renders without crashing.', () => {
        shallow(<Logout />);
    });
    it('Dispatches logoutRequest if it has a jwt prop', () => {
        const logoutRequest = jest.fn();
        const wrapper = shallow(<Logout logoutRequest={logoutRequest} jwt='xxx' />);
        expect(logoutRequest).toHaveBeenCalled();
    });
    it('Doesn\'t not dispatch logout request if jwt is null', () => {
        const logoutRequest = jest.fn();
        const wrapper = shallow(<Logout logoutRequest={logoutRequest} jwt={null} />);
        expect(logoutRequest).not.toHaveBeenCalled();
    });
    it('Redirects', () => {
        const wrapper = shallow(<Logout />);
        expect(wrapper.find(Redirect).length).toBe(1);
    });
});
