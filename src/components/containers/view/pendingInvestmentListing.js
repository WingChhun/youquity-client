import React from 'react';
import {connect} from 'react-redux';

import InvestmentListingRow from '../../display/investmentListingRow';
import Loading from '../../display/loadingDiv';

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
        if(this.props.isReady) {
            const stockTypes = this.mapClassSlugToName();
            const rows = this.props.requests.map((cert, i) => {
                cert.shareClass = stockTypes[cert.shareClassSlug];
                return (<InvestmentListingRow key={i} data={cert} />);
            });

            return (
                <div className="investment-listing-wrapper">
                    <header className="investment-listing-header">
                        <h2 className="page-heading">Pending Investments</h2>
                    </header>
                    <div className="investment-listing-table">
                            <div className="investment-listing-header-row pending">
                                <div className="investment-listing-column-heading">Shareholder</div>
                                <div className="investment-listing-column-heading">Number of Shares</div>
                                <div className="investment-listing-column-heading">Request Date</div>
                                <div className="investment-listing-column-heading">Stock Class</div>
                                <div className="investment-listing-column-heading"> </div>
                            </div>
                            {rows}
                    </div>
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
    requests: state.investment.investmentData.pending,
    stockTypes: state.investment.companyData.shareClasses,
    redirect: state.investment.redirect,
    isReady: state.investment.isReady
});

export default connect(mapStateToProps)(PendingInvestmentListing);