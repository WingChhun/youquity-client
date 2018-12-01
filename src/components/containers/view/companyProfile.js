import React from 'react';

import DataListElement from '../../display/dataListElement';
import InvestmentDetailCard from '../../display/investmentDetailCard';

import '../../../css/components/containers/view/companyProfile.scss';

export default function CompanyProfile(props) {
    const companySummary = props.data.summaryData.map((line, i) => {
        return(
            <DataListElement key={i} data={line} />
        );
    });

    const stockSummaryCards = props.data.stockTypes.map((card, i) => {
        return(
            <InvestmentDetailCard key={i} data={card} />
        );
    });

    return (
        <div className="company-profile-wrapper">
            <header className="company-profile-header">
                <h2>
                    {props.data.companyName} <i className="far fa-edit"></i>
                </h2>
            </header>
            <section>
                <ul>
                    {companySummary}
                </ul>
            </section>
            <section className="company-about">
                <h3>About {props.data.companyName}:</h3>
                <p className="company-about">{props.data.aboutText} <i className="far fa-edit"></i></p>
            </section>
            <section className="stock-types">
                {stockSummaryCards}
            </section>
        </div>
    );
}