import React from 'react';

import InvestmentListingRow from '../../display/investmentListingRow';

import '../../../css/components/containers/view/investmentListing.scss';

export default function InvestmentListing(props) {
    const rows = props.data.certificates.map((cert,i) => {
        return(<InvestmentListingRow key={i} data={cert} />);
    });

    return (
        <table className="investment-listing-table">
            <tr className="investment-listing-header-row">
                <th className="investment-listing-column-heading">Certificate</th>
                <th className="investment-listing-column-heading">Shareholder</th>
                <th className="investment-listing-column-heading">Number of Shares</th>
                <th className="investment-listing-column-heading">Purchase Date</th>
                <th className="investment-listing-column-heading">Stock Class</th>
            </tr>
            {rows}
        </table>
    );
}