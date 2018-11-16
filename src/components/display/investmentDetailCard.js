import React from 'react';

import DataListElement from './dataListElement';

import '../../css/components/display/investmentDetailCard.scss';

export default function InvestmentDetailCard(props) {
    const dataLines = [
        {
            label: 'Total Investment in ' + props.companyName,
            data: props.totalInvestment
        },
        {
            label: 'Average Price Per Share',
            data: props.avgPricePerShare
        },
        {
            label: '# of Shares',
            data: props.numShares
        },
        {
            label: 'Current Valuation',
            data: props.currentValuation + '(' + props.currentValPerShare + '/share)'
        },
        {
            label: 'Net Gain/Loss',
            data: props.netChange
        }
    ];

    const details = dataLines.map((line, i) => {
        return <DataListElement key={i} label={line.label} data={line.data} />;
    });
    return (
        <article className="investment-detail-card">
            <header className="detail-card-header">
                <h3 class="detail-card-title">{props.companyName}</h3>
            </header>
            <section className="card-details">
                <ul>
                    {details}
                </ul>
            </section>
            <footer className="detail-card-footer"><button>More Details</button></footer>
        </article>
    );
}