import React from 'react';

import '../../css/components/display/dataListElement.scss';

export default function DataListElement(props) {
    return (
        <li class="data-list-element">
            <span class="list-element-label">{props.label}:</span>
            <span className="list-element-data">{props.data}</span>
        </li>
    );
}