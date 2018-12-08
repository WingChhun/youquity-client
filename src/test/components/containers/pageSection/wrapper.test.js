import React from 'react';
import {shallow} from 'enzyme';

import {Wrapper} from '../../../../components/containers/pageSection/wrapper';

import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../../../../components/containers/pageSection/nav';
import Header from '../../../../components/containers/pageSection/header';
import Main from '../../../../components/containers/pageSection/main';
import Footer from '../../../../components/containers/pageSection/footer';

describe('<Wrapper />', () => {
    it('Renders without crashing.', () => {
        shallow(<Wrapper initializeData={() => {}} />);
    });
    it('Dispatches initializeData if it has a jwt prop', () => {
        const spy = jest.spyOn(Wrapper.prototype, 'componentDidMount');
        const initializeSpy = jest.fn();
        const wrapper = shallow(<Wrapper initializeData={initializeSpy} jwt="xyz" />);
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
        expect(initializeSpy).toHaveBeenCalled();
    });
    it('does not dispatch initializedata if it does not have a jwt', () => {
        const spy = jest.spyOn(Wrapper.prototype, 'componentDidMount');
        const initializeSpy = jest.fn();
        const wrapper = shallow(<Wrapper initializeData={initializeSpy} jwt={null} />);
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
        expect(initializeSpy).not.toHaveBeenCalled();
    });
    it('renders a Router, Nav, Header, Main, and Footer', () => {
        const wrapper = shallow(<Wrapper initializeData={() => { }} />);
        expect(wrapper.contains([Router, Nav, Header, Main, Footer]));
    });
});
