import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { renderInputField } from './renderField';
import validator from 'validator';

import '../../css/components/forms/loginForm.scss';

const validate = function (val) {
    const errors = {};
    if(!val.email) {
        errors.email = 'Required';
    } else if(!validator.isEmail(val.email)) {
        errors.email = 'Invalid email address.';
    }
    if(!val.password) {
        errors.password = 'Required';
    }
    return errors;
}

export function LoginForm(props) {
    const buttonClass = (props.loading ? 'button is-link loading' : 'button is-link');
    return (
        <form onSubmit={props.handleSubmit} className="form login-form">
            <div className="form-instructions">
                <span className="strong">Demo User:</span><br />test@test.test<br />
                <span className="strong">Password:</span><br />testing123
            </div>
            <Field
                name="email"
                component={renderInputField}
                type="email"
                label="Email Address" />
            <Field
                name="password"
                component={renderInputField}
                type="password"
                label="Password" />
            <div className="field">
                <div className="control">
                    <button className={buttonClass}>Submit</button>
                </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);