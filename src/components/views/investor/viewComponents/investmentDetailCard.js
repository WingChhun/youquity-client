import React from 'react';

import '../../../../css/views/investor/viewComponents/investmentDetailCArd.js';

export default function InvestmentDetailCard(props) {
    return (
        <article className="investment-detail-card">
            <header className="detail-card-header">
                <h3>{props.companyName}</h3>
            </header>
            <section className="card-details">
                <ul>
                    <li>
                        <strong>Total Investment in {props.companyName}:</strong>
                        <span className="data">{props.totalInvestment}</span>
                    </li>
                    <li>
                        <strong>Average Price Per Share:</strong>
                        <span className="data">{props.avgPricePerShare}</span>
                    </li>
                    <li>
                        <strong># of Shares:</strong>
                        <span className="data">{props.numShares}</span>
                    </li>
                    <li>
                        <strong>Current Valuation:</strong>
                        <span className="data">{props.currentValuation} ({props.currentValPerShare})</span>
                    </li>
                    <li>
                        <strong>Net Gain/Loss:</strong>
                        <span className="data">{props.netChange}</span>
                    </li>
                </ul>
            </section>
            <footer><button>More Details</button></footer>
        </article>
    );
}