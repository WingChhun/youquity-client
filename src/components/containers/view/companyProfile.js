import React from 'react';
import {connect} from 'react-redux';

import DataListElement from '../../display/dataListElement';
import InvestmentDetailCard from '../../display/investmentDetailCard';

import {clearRedirect} from '../../../actions';

import '../../../css/components/containers/view/companyProfile.scss';

export class CompanyProfile extends React.Component {
    componentDidMount() {
        if(this.props.redirect) {
            this.props.dispatch(clearRedirect());
        }
    }
    render() {
        if(this.props.isReady) {
            const companySummary = this.props.summaryData.map((line, i) => {
                return (
                    <DataListElement 
                        key={i}
                        label={line.label}
                        data={line} />
                );
            });


            const stockSummaryCards = this.props.stockTypes.map((card, i) => {
                return (
                    <InvestmentDetailCard 
                        key={i}
                        title={card.className}
                        cardData={card.classData} />
                );
            });


            return (
                <div className="company-profile-wrapper">
                    <header className="company-profile-header">
                        <h2 className="page-heading">
                            {`${this.props.companyName} Dashboard`}
                        </h2>
                    </header>
                    <section>
                        <ul className="company-summary-list">
                            {companySummary}
                        </ul>
                    </section>
                    <section className="stock-types">
                        {stockSummaryCards}
                    </section>
                </div>
            );
        } else {
            return(
                <div className="loading">Loading</div>
            )
        }
    }
}

const mapStateToProps = state => ({
    companyName: state.investment.companyData.name,
    aboutText: state.investment.companyData.description,
    summaryData: state.investment.companyData.summaryData,
    stockTypes: state.investment.companyData.shareClasses,
    requestListData: state.investment.investmentData.pending,
    redirect: state.investment.redirect,
    isReady: state.investment.isReady
});

export default connect(mapStateToProps)(CompanyProfile);