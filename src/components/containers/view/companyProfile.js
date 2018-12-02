import React from 'react';
import {connect} from 'react-redux';

import DataListElement from '../../display/dataListElement';
import InvestmentDetailCard from '../../display/investmentDetailCard';
import RequestListModal from '../../display/requestListModal';

import '../../../css/components/containers/view/companyProfile.scss';

export class CompanyProfile extends React.Component {
    render() {
        const companySummary = this.props.summaryData.map((line, i) => {
            return (
                <DataListElement 
                    key={i}
                    label={line.label}
                    data={line} />
            );
        });

        const viewStockButton = {
            className: 'view-issued-stock-btn',
            buttonText: 'View Issued Stock'
        };

        const issueStockButton = {
            className: 'issue-stock-btn',
            buttonText: 'Issue Shares'
        };

        const stockSummaryCards = this.props.stockTypes.map((card, i) => {
            const cardButtons = [viewStockButton];
            if(card.currentlyOffered) {
                cardButtons.push(issueStockButton);
            }
            return (
                <InvestmentDetailCard 
                    key={i}
                    title={card.className}
                    cardData={card.classData}
                    cardButtons={cardButtons} />
            );
        });

        return (
            <div className="company-profile-wrapper">
                <header className="company-profile-header">
                    <h2 className="editable">
                        {this.props.companyName}
                    </h2>
                </header>
                <section>
                    <ul>
                        {companySummary}
                    </ul>
                </section>
                <section className="stock-types">
                    {stockSummaryCards}
                </section>
                <RequestListModal requestData={this.props.requestListData} stockTypeData={this.props.stockTypes} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    companyName: state.companyData.name,
    aboutText: state.companyData.description,
    summaryData: state.companyData.summaryData,
    stockTypes: state.companyData.shareClasses,
    requestListData: state.investmentData.pending
});

export default connect(mapStateToProps)(CompanyProfile);