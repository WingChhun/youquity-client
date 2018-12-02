import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';

import '../../css/components/display/dataListElement.scss';


function DataElement(props) {
    return(
        <span className="list-element-data">
            {props.data.data}
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