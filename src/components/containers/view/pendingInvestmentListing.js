import React from 'react';
import {connect} from 'react-redux';

import InvestmentListingRow from '../../display/investmentListingRow';

import { clearRedirect } from '../../../actions';

import '../../../css/components/containers/view/investmentListing.scss';

export class PendingInvestmentListing extends React.Component {
    componentDidMount() {
        if (this.props.redirect) {
            this.props.dispatch(clearRedirect());
        }
    }
    mapClassSlugToName() {
        let classes = {};
        this.props.stockTypes.forEach(element => {
            classes[element.classSlug] = element.className;
        });
        return(classes);
    }
    render() {
        const stockTypes = this.mapClassSlugToName();
        const rows = this.props.requests.map((cert, i) => {
            cert.shareClass = stockTypes[cert.shareClassSlug];
            return (<InvestmentListingRow key={i} data={cert} />);
        });

        return (
            <div className="investment-listing-wrapper">
                <header className="investment-listing-header">
                    <h2 className="page-heading">Listing of Pending Investments</h2>
                </header>
                <table className="investment-listing-table">
                    <thead>
                        <tr className="investment-listing-header-row">
                            <th className="investment-listing-column-heading">Shareholder</th>
                            <th className="investment-listing-column-heading">Number of Shares</th>
                            <th className="investment-listing-column-heading">Request Date</th>
                            <th className="investment-listing-column-heading">Stock Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    requests: state.investment.investmentData.pending,
    stockTypes: state.investment.companyData.shareClasses,
    redirect: state.investment.redirect
});

export default connect(mapStateToProps)(PendingInvestmentListing);