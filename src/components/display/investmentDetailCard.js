import React from 'react';

import DataListElement from './dataListElement';

import '../../css/components/display/investmentDetailCard.scss';

export default function InvestmentDetailCard(props) {
    const details = props.cardData.map((line, i) => {
        return(
            <DataListElement 
                key={i} 
                label={line.dataName}
                data={line} />
        );
    });
    return (
        <article className="investment-detail-card">
            <header className="detail-card-header">
                <h3 className="detail-card-title">{props.title}</h3>
            </header>
            <section className="card-details">
                <ul>
                    {details}
                </ul>
            </section>
            <footer className="detail-card-footer">
            </footer>
        </article>
    );
}