import React from 'react';

import Nav from './nav';
import Header from './header';
import Main from './main';
import Footer from './footer';

import '../../../css/components/containers/pageSection/wrapper.scss';

export default function Wrapper() {
    return (
        <div className="wrapper">
            <Nav />
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

