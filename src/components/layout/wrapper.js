import React from 'react';

import Nav from './nav';
import Header from './header';
import Footer from './footer';

import '../../css/layout/wrapper.scss';

export default function Wrapper() {
    return (
        <div className="wrapper">
            <Nav />
            <Header />
            <Footer />
        </div>
    );
}

