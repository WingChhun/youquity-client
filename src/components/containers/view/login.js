import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {login} from '../../../actions/login';

import LoginForm from '../../forms/loginForm'

import '../../../css/components/containers/view/login.scss';

export class Login extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
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
                        <div className="app-explanation">
                            <p className="app-explanation-paragraph">YouQuity is an app to help small businesses manage their equity structures. This is something that many privately held small businesses struggle with.</p>
                            
                            <p className="app-explanation-paragraph">Attorneys are typically used to manage this process, at a cost of thousands of dollars (or more) per year, but with the proper tools this process can be managed by the small business with minimal attorney oversight, greatly reducing costs.</p>

                            <p className="app-explanation-paragraph">This app is currently in the MVP (minimum viable product) stage, and right now it allows companies to create share classes, and create issued or pending investment records.</p>
                        </div>
                    </header>
                    <LoginForm 
                        onSubmit={this.handleSubmit} />
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    jwt: state.investment.jwt
});

export default connect(mapStateToProps)(Login);