import React from 'react';

export function renderInputField({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <input {...input} placeholder={label} type={type} />
                {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
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
        <div className="field">
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