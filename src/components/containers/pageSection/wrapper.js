import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Nav from './nav';
import Header from './header';
import Main from './main';
import Footer from './footer';

import '../../../css/components/containers/pageSection/wrapper.scss';

export default function Wrapper() {
    return (
        <Router>
            <div className="wrapper">
                <Nav />
                <Header />
                <Main />
                <Footer />
            </div>
        </Router>
    );
}

