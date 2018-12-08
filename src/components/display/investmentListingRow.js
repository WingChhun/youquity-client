import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faEdit} from '@fortawesome/free-solid-svg-icons';

import '../../css/components/display/investmentListingRow.scss';

export default function InvestmentListingRow(props) {
    let columnHeaderGroup = <div className="investment-listing-header-column">
        <div className="investment-listing-column-heading">Certificate</div>
        <div className="investment-listing-column-heading">Shareholder</div>
        <div className="investment-listing-column-heading">Number of Shares</div>
        <div className="investment-listing-column-heading">Purchase Date</div>
        <div className="investment-listing-column-heading">Stock Class</div>
    </div>;
    let rowClass = 'investment-listing-row issued';
    if(!props.data.certificateNum) {
        columnHeaderGroup = <div className="investment-listing-header-column">
            <div className="investment-listing-column-heading">Shareholder</div>
            <div className="investment-listing-column-heading">Number of Shares</div>
            <div className="investment-listing-column-heading">Request Date</div>
            <div className="investment-listing-column-heading">Stock Class</div>
            <div className="investment-listing-column-heading"> </div>
        </div>;
        rowClass = 'investment-listing-row pending';
    }
    const columns = [];
    if(props.data.certificateNum) {
        columns.push(<div key="cert-num" className="investment-listing-data cert-num">{props.data.certificateNum}</div>);
    }

    columns.push(<div key="cert-title" className="investment-listing-data cert-title">{props.data.certificateTitle}</div>);

    columns.push(<div key="num-shares" className="investment-listing-data num-shares">{props.data.numShares}</div>);

    if(props.data.purchaseDate) {
        columns.push(<div key="purchase-date" className="investment-listing-data purchase-date">{props.data.purchaseDate}</div>);
    } else {
        columns.push(<div key="request-date" className="investment-listing-data request-date">{props.data.requestDate}</div>);
    }

    columns.push(<div key="share-class" className="investment-listing-data share-class">{props.data.shareClass}</div>);

    if(!props.data.certificateNum) {
        // pending, so editable
        columns.push(<div key="edit-link" className="investment-listing-data edit-link"><Link to={`/issueShares/${props.data.id}`} className="investment-edit-link"><FontAwesomeIcon icon={faEdit} className="investment-edit-icon" /></Link></div>)
    }

    return (
        <div className="investment-listing-row-wrapper">
            {columnHeaderGroup}
            <div className={rowClass}>
                {columns}
            </div>
        </div>
    );
}