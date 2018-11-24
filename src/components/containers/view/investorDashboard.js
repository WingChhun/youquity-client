import React from 'react';

import InvestmentDetailCard from '../../display/investmentDetailCard';
import DataListElement from '../../display/dataListElement';

import '../../../css/components/containers/view/investorDashboard.scss';

export default function InvestorDashboard(props) {
    const cards = props.cardData.map((card, index) =>{
        return(
            <InvestmentDetailCard
                key={index}
                data={card}
            />
        )
    });

    const summary = props.summaryData.map((line, i) => {
        return(
            <DataListElement key={i} label={line.label} data={line.data} />
        );
    });

    return (
        <div className="investor-dashboard-container">
            <section className="investor-summary">
                <ul>
                    {summary}
                </ul>
            </section>
            <section className="investment-details">
                {cards}
            </section>
        </div>
    );
}