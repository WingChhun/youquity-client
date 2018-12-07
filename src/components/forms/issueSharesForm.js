import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {renderInputField, renderSelectField} from './renderField';

import '../../css/components/forms/issueSharesForm.scss';

const validate = function(val) {
    const now = new Date();
    const errors = {};
    if(!val.shareType || val.shareType==='null') {
        errors.shareType = 'Please select a share type.'
    }
    if(!val.shareholderName) {
        errors.shareholderName = 'Required';
    } else if(val.shareholderName.length < 5) {
        errors.shareholderName = 'Shareholder name must be at least 5 characters long.';
    }

    if(!val.dateRequested) {
        errors.dateRequested = 'Required'
    } else if(new Date(val.dateRequested) > now) {
        errors.dateRequested = 'Cannot be a future date.'
    }

    if(!val.numShares) {
        errors.numShares = 'Required';
    } else if(isNaN(Number(val.numShares))) {
        errors.numShares = 'Must be a number.';
    } else if(Number(val.numShares) < 1) {
        errors.numShares = 'Must be one or greater.';
    } 

    if (!val.subsAgmt && (val.issueDate || val.certificateNumber)) {
        errors.subsAgmt = 'Subscription agreement must be received before certificate is issued.';
    }

    if (!val.pymtRecd && (val.issueDate || val.certificateNumber)) {
        errors.pymtRecd = 'Payment must be received before certificate is issued.';
    }

    if(!val.issueDate && val.certificateNumber) {
        errors.issueDate = 'Issue date must be completed when certificate number has been entered';
    } else if(val.issueDate && new Date(val.issueDate) > now) {
        errors.issueDate = 'Cannot be a future date.';
    }

    if(val.certificateNumber && isNaN(Number(val.certificateNumber))) {
        errors.certificateNumber = 'Must be a number.'
    } else if (!val.certificateNumber && val.issueDate) {
        errors.certificateNumber = 'Certificate number is required when Issue Date is completed.';
    }
    return errors;
}

export function IssueSharesForm(props) {
    const classOptionList = props.availableClasses.map((element, i) => {
        return(
            <option key={i} value={element.classSlug}>{element.className}</option>
        )
    });
    classOptionList.unshift(
        <option key="none" value="null">Select a Class</option>
    );
    return (
        <form onSubmit={props.handleSubmit} className="form issue-shares-form">
            <div className="form-instructions">
                <span className="strong">Instructions:</span> Investments will be marked as 'Pending' until all fields in this form have been completed.
            </div>
            <Field 
                name="shareType"
                component={renderSelectField}
                label="Share Class">
                {classOptionList}
            </Field>
            <Field 
                name="shareholderName" 
                component={renderInputField} 
                type="text" 
                label="Shareholder Name" />
            <Field 
                name="numShares" 
                component={renderInputField} 
                type="number" 
                label="Number of Shares" />
            <Field
                name="dateRequested"
                component={renderInputField}
                type="date"
                label="Date Requested" />
            <Field 
                name="subsAgmt" 
                component={renderInputField} 
                type="checkbox"
                label="Subscription Agreement Received" />
            <Field 
                name="pymtRecd" 
                component={renderInputField} 
                type="checkbox"
                label="Payment Received" />
            <Field
                name="issueDate"
                component={renderInputField}
                type="date"
                label="Date Issued" />
            <Field 
                name="certificateNumber" 
                component={renderInputField} 
                type="number" 
                label="Certificate Number" />
            <div className="field">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'issueSharesForm',
    validate
})(IssueSharesForm);