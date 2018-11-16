import React from 'react';

import InvestmentDetailCard from '../../display/investmentDetailCard';

import '../../../css/components/containers/view/investorDashboard.scss';

export default function InvestorDashboard(props) {
    // const cardData = props.cardData;
    console.log(props.cardData);
    const cards = props.cardData.map((card, index) =>{
        return(
            <InvestmentDetailCard
                key={index}
                companyName={card.companyName}
                totalInvestment={card.totalInvestment}
                avgPricePerShare={card.avgPricePerShare}
                numShares={card.numShares}
                currentValuation={card.currentValuation}
                currentValPerShare={card.currentValPerShare}
                netChange={card.netChange}
            />
        )
    });

    return (
        <main className="main-container">
            <section className="investor-summary">
                <ul>
                    <li><strong>Total Amount Invested:</strong><span className="data">$100,000</span></li>
                    <li><strong># of Companies Invested In:</strong><span className="data">3</span></li>
                    <li><strong>Current Valuation:</strong><span className="data">$123,000</span></li>
                    <li><strong>Net Gain/Loss:</strong><span className="data">+$23,000</span></li>
                </ul>
            </section>
            <section className="investment-details">
                {cards}
            </section>
        </main>
    );
}