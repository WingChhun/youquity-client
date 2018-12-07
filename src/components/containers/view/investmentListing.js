import React from 'react';
import {connect} from 'react-redux';

import InvestmentListingRow from '../../display/investmentListingRow';
import Loading from '../../display/loadingDiv';

import { clearRedirect } from '../../../actions';

import '../../../css/components/containers/view/investmentListing.scss';

export class InvestmentListing extends React.Component {
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
        if(this.props.isReady) {
            const stockTypes = this.mapClassSlugToName();
            const rows = this.props.certificates.map((cert, i) => {
                cert.shareClass = stockTypes[cert.shareClassSlug];
                return (<InvestmentListingRow key={i} data={cert} />);
            });

            return (
                <div className="investment-listing-wrapper">
                    <header className="investment-listing-header">
                        <h2 className="page-heading">Completed Investments</h2>
                    </header>
                    <table className="investment-listing-table">
                        <thead>
                            <tr className="investment-listing-header-row">
                                <th className="investment-listing-column-heading">Certificate</th>
                                <th className="investment-listing-column-heading">Shareholder</th>
                                <th className="investment-listing-column-heading">Number of Shares</th>
                                <th className="investment-listing-column-heading">Purchase Date</th>
                                <th className="investment-listing-column-heading">Stock Class</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return(
                <Loading />
            );
        }
    }
}

const mapStateToProps = state => ({
    certificates: state.investment.investmentData.issued,
    stockTypes: state.investment.companyData.shareClasses,
    redirect: state.investment.redirect,
    isReady: state.investment.isReady
});

export default connect(mapStateToProps)(InvestmentListing);