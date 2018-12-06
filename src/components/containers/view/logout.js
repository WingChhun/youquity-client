import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {logoutRequest} from '../../../actions/logout';

export class Logout extends React.Component {
    render() {
        if(this.props.jwt) {
            this.props.logoutRequest();
        }
        return (
            <Redirect to="/login" />
        );
    }
}

const mapStateToProps = (state) => ({
    jwt: state.investment.jwt
});

const mapDispatchToProps = {
    logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);