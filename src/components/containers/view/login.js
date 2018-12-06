import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {login} from '../../../actions/login';

import LoginForm from '../../forms/loginForm'

import '../../../css/components/containers/view/login.scss';

export class Login extends React.Component {
    handleSubmit(v) {
        this.props.dispatch(login(v));
    }

    render() {
        if(this.props.jwt) {
            return(
                <Redirect to='/' />
            );
        } else {
            return(
                <div className="login-page">
                    <header className="login-header">
                        <h2 className="page-heading">Log In</h2>
                    </header>
                    <LoginForm 
                        onSubmit={this.handleSubmit.bind(this)} />
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    jwt: state.investment.jwt
});

export default connect(mapStateToProps)(Login);