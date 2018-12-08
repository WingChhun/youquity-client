import React from 'react';
import {shallow} from 'enzyme';

import {Nav} from '../../../../components/containers/pageSection/nav';

import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


const links = {
    dashboard: {
        name: 'Dashboard',
        selected: true,
        destination: '/',
        class: 'dashboard'
    },
    issueShares: {
        name: 'Issue Shares',
        selected: false,
        destination: '/issueShares',
        class: 'issue-shares'
    },
    showIssued: {
        name: 'Completed Investments',
        selected: false,
        destination: '/investmentListing',
        class: 'show-issued'
    },
    showPending: {
        name: 'Pending Investments',
        selected: false,
        destination: '/pending',
        class: 'show-pending'
    },
    addShareClass: {
        name: 'Add Share Class',
        selected: false,
        destination: '/addShareClass',
        class: 'add-share-class'
    },
    logout: {
        name: 'Log Out',
        selected: false,
        destination: '/logout'
    }
};

describe('<Nav />', () => {
    it('Renders without crashing.', () => {
        shallow(<Nav />);
    });
    it('renders a menu', () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper.contains([Menu]));
    });
    it('renders the links passed to it', () => {
        const wrapper = shallow(<Nav links={links} /> )
        expect(wrapper.find(Link).length).toBe(Object.keys(links).length);
    });
});
