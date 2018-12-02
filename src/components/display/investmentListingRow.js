import React from 'react';

import '../../css/components/display/investmentListingRow.scss';

export default function InvestmentListingRow(props) {
    const columns = [];
    if(props.data.certificateNum) {
        columns.push(<td key="cert-num" className="investment-listing-data cert-num">{props.data.certificateNum}</td>);
    }

    columns.push(<td key="cert-title" className="investment-listing-data cert-title">{props.data.certificateTitle}</td>);

    columns.push(<td key="num-shares" className="investment-listing-data num-shares">{props.data.numShares}</td>);

    if(props.data.purchaseDate) {
        columns.push(<td key="purchase-date" className="investment-listing-data purchase-date">{props.data.purchaseDate}</td>);
    } else {
        columns.push(<td key="request-date" className="investment-listing-data request-date">{props.data.requestDate}</td>);
    }

    columns.push(<td key="share-class" className="investment-listing-data share-class">{props.data.shareClass}</td>);

    return (
        <tr className="investment-listing-row">
            {columns}
        </tr>
    );
}