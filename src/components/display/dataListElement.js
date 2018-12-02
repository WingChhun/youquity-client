import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

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
            {props.data.editable ? <FontAwesomeIcon icon={faEdit} /> : ''}
        </span>
    );
}

export default function DataListElement(props) {
    return (
        <li className="data-list-element">
            <span className="list-element-label">{props.label}:</span>
            <DataElement data={props.data} />
        </li>
    );
}