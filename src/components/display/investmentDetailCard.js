import React from 'react';

import DataListElement from './dataListElement';

import '../../css/components/display/investmentDetailCard.scss';

export default function InvestmentDetailCard(props) {
    const details = props.data.cardData.map((line, i) => {
        return <DataListElement key={i} label={line.label} data={line.data} />;
    });
    return (
        <article className="investment-detail-card">
            <header className="detail-card-header">
                <h3 class="detail-card-title">{props.data.cardTitle}</h3>
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