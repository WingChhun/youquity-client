import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';

import {initializeData} from '../../../actions/initialize';

import Nav from './nav';
import Header from './header';
import Main from './main';
import Footer from './footer';

import '../../../css/components/containers/pageSection/wrapper.scss'

export class Wrapper extends React.Component {
    componentDidMount() {
        if(this.props.jwt) {
            this.props.initializeData();
        }
    }
    render() {
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
}

const mapStateToProps = state => ({
    jwt: state.investment.jwt
});

const mapDispatchToProps = {
    initializeData,
};

export default connect(mapStateToProps,mapDispatchToProps)(Wrapper);