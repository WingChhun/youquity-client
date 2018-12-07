import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons';

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
                <div className="detail-card-icon-wrapper">
                    <FontAwesomeIcon icon={faHandHoldingUsd} className="detail-card-icon" />
                </div>
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