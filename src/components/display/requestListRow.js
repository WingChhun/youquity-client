import React from 'react';

import '../../css/components/display/requestListRow.scss';

export default function RequestListRow(props) {
    return (
        <tr className="request-list-row">
            <td className="request-data shareholder-name">
                {props.data.shareholderName}
            </td>
            <td className="request-data shares-requested">
                {props.data.sharesRequested}
            </td>
            <td className="request-data status">
                <a href={props.data.href}>{props.data.status}</a>
            </td>
        </tr>
    );
}