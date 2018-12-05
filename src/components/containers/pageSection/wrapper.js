import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';

import {initializeData} from '../../../actions';

import Nav from './nav';
import Header from './header';
import Main from './main';
import Footer from './footer';

import '../../../css/components/containers/pageSection/wrapper.scss'

export class Wrapper extends React.Component {
    componentDidMount() {
        this.props.initializeData();
    }
    render() {
        console.log(this.props);
        if(this.props.isReady) {
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
        } else {
            return(<div clasName="loading">Loading</div>);
        }
    }
}

const mapStateToProps = state => ({
    isReady: state.investment.isReady
});

const mapDispatchToProps = {
    initializeData,
};

export default connect(mapStateToProps,mapDispatchToProps)(Wrapper);