import React from 'react';

export function renderInputField({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) {
    return (
        <div className={`field${(touched && error ? ' error' : (touched && warning ? 'warning' : ''))}`}>
            <label className={`label${(touched && error ? ' error' : (touched && warning ? 'warning' : ''))}`}>{label}</label>
            <div className={`input-wrapper${(touched && error ? ' error' : (touched && warning ? 'warning' : ''))}`}>
                <input {...input} placeholder={label} type={type} className="input" />
                {touched &&
                    ((error && <span className="form-field-error error">{error}</span>) ||
                        (warning && <span className="warning form-field-error">{warning}</span>))}
            </div>
        </div>
    );
}

export function renderSelectField({
    input,
    label,
    type,
    meta: { touched, error, warning },
    children
}) {
    return(
        <div className={`field${(touched && error ? ' error' : (touched && warning ? 'warning' : ''))}`}>
            <label className="label">{label}</label>
            <div className="control">
                <select {...input}>
                    {children}
                </select>
                {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
}