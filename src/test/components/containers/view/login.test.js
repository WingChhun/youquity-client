import React from 'react';
import {shallow} from 'enzyme';

import { Login } from '../../../../components/containers/view/login';

import { Redirect } from 'react-router-dom';
import * as loginFuncs from '../../../../actions/login';
import LoginForm from '../../../../components/forms/loginForm';

describe('<Login />', () => {
    it('Renders without crashing.', () => {
        shallow(<Login />);
    });
    it('Redirects if it has a jwt prop', () => {
        const wrapper = shallow(<Login jwt="xxx" />);
        expect(wrapper.find(Redirect).length).toBe(1);
    });
    it('Renders the login form if it does not have a jwt prop', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(LoginForm).length).toBe(1);
    });
    it('Dispatches the login action on form submit', () => {
        loginFuncs.login = jest.fn();
        const spy = jest.spyOn(Login.prototype, 'handleSubmit');
        const dispatch = jest.fn();
        const wrapper = shallow(<Login dispatch={dispatch} />);
        wrapper.instance().handleSubmit('x');
        expect(spy).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(loginFuncs.login('x'));
    });
});
