import React from 'react';

import '../../css/components/display/investmentListingRow.scss';

export default function InvestmentListingRow(props) {
    return (
        <tr className="investment-listing-row">
            <td className="investment-listing-data cert-num">{props.data.certificateNum}</td>
            <td className="investment-listing-data cert-title">{props.data.certificateTitle}</td>
            <td className="investment-listing-data num-shares">{props.data.numShares}</td>
            <td className="investment-listing-data purchase-date">{props.data.purchaseDate}</td>
            <td className="investment-listing-data share-class">{props.data.shareClass}</td>
        </tr>
    );
}