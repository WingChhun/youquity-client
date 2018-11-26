import React from 'react';

import '../../css/components/display/dataListElement.scss';

function constructLink(anchor, href) {
    return(
        <a href={href}>{anchor}</a>
    );
}

function DataElement(props) {
    return(
        <span className="list-element-data">
            {props.href ? constructLink(props.data, props.href) : props.data}
        </span>
    );
}

export default function DataListElement(props) {
    return (
        <li className="data-list-element">
            <span className="list-element-label">{props.label}:</span>
            <DataElement {...props} />
        </li>
    );
}