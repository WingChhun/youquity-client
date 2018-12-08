import React from 'react';
import {shallow} from 'enzyme';

import { AddShareClass } from '../../../../components/containers/view/addShareClass';

import * as shareClassFuncs from '../../../../actions/shareClass';
import AddShareClassForm from '../../../../components/forms/addShareClassForm';
import {Redirect} from 'react-router-dom';

describe('<AddShareClass />', () => {
    it('Renders without crashing.', () => {
        shallow(<AddShareClass />);
    });
    it('Dispatches addShareClass on form submit', () => {
        const dispatch = jest.fn();
        shareClassFuncs.addShareClass = jest.fn();
        const wrapper = shallow(<AddShareClass
            dispatch={dispatch}
        />);
        wrapper.instance().handleSubmit('x');
        expect(dispatch).toHaveBeenCalledWith(shareClassFuncs.addShareClass('x'));
    });
    it('Renders AddShareClass form`', () => {
        const wrapper = shallow(<AddShareClass 
            isReady={true}
        />);
        expect(wrapper.find(AddShareClassForm).length).toBe(1);
    });
    it('Redirects if it has a redirect prop', () => {
        const wrapper = shallow(<AddShareClass
            isReady={true}
            redirect='/'
        />);
        expect(wrapper.find(Redirect).length).toBe(1);
    });
});
