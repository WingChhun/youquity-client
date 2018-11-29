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
            {props.data.href ? constructLink(props.data.data, props.data.href) : props.data.data}
        </span>
    );
}

export default function DataListElement(props) {

    console.log(props.data);
    return (
        <li className="data-list-element">
            <span className="list-element-label">{props.data.label}:</span>
            <DataElement data={props.data} />
        </li>
    );
}