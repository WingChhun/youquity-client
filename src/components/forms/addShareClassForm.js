import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { renderInputField } from './renderField';

import '../../css/components/forms/addShareClassForm.scss';

const validate = function(val, props) {
    console.log(val);
    console.log(props);
    const errors = {};
    if(!val.className) {
        errors.className = 'Required';
    } else if (val.className.length < 2) {
        errors.className = 'Class Name must be at least two characters';
    }

    if(!val.authorizedShares) {
        errors.authorizedShares = 'Required';
    } else if(isNaN(Number(val.authorizedShares))) {
        errors.authorizedShares = 'Must be a number.';
    } else if(val.authorizedShares < 1) {
        errors.authorizedShares = 'Authorized Shares must be at least 1.';
    }
    
    if(!val.reservedShares) {
        errors.reservedShares = 'Required (can be 0)';
    } else if(isNaN(Number(val.reservedShares))) {
        errors.reservedShares = 'Reserved Shares must be a number (can be 0).';
    } else if(Number(val.reservedShares) > Number(val.authorizedShares)) {
        errors.reservedShares = 'Reserved Shares cannot be greater than Authorized Shares.';
    }

    if(!val.sharePrice) {
        errors.sharePrice = 'Required';
    } else if (isNaN(Number(val.sharePrice))) {
        errors.sharePrice = 'Share Price must be a number';
    }

    return errors;
};

export function AddShareClassForm(props) {
    const buttonClass = (props.loading ? 'button is-link loading' : 'button is-link');
    return (
        <form onSubmit={props.handleSubmit} className="form add-share-class-form">
            <Field
                name="className"
                component={renderInputField}
                type="text"
                label="Class Name" />
            <Field
                name="authorizedShares"
                component={renderInputField}
                type="number"
                label="Authorized Shares" />
            <Field
                name="reservedShares"
                component={renderInputField}
                type="number"
                label="Reserved Shares" />
            <Field
                name="sharePrice"
                component={renderInputField}
                type="number"
                label="Price Per Share"
                step=".01"
                min="0.01" />
            <Field
                name="currentlyOffered"
                component={renderInputField}
                type="checkbox"
                label="Currently Offered" />
            <div className="field">
                <div className="control">
                    <button className={buttonClass}>Submit</button>
                </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'addShareClassForm',
    validate
})(AddShareClassForm);