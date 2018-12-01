import React from 'react';

import InvestmentDetailCard from '../../display/investmentDetailCard';
import DataListElement from '../../display/dataListElement';
import StockClassDetailsModal from '../../display/stockClassDetailsModal';

import '../../../css/components/containers/view/investorCompanyDetail.scss';

export default function InvestorCompanyDetail(props) {
    const summary = props.summaryData.summaryDetail.map((line, i) => {
        return(
            <DataListElement 
                key={i}
                data={line}
            />
        );
    });

    const cards = props.certificates.map((card, i) => {
        return(
            <InvestmentDetailCard
                key={i}
                data={card}
            />
        );
    });

    return (
        <div className="investor-company-detail-container">
                <section className="about-company-body">
                    <h2>About {props.companyName}</h2>
                    <p className="company-about">
                        {props.summaryData.aboutText}
                    </p>
                    <footer>
                        <button>Purchase Additional Shares</button>
                    </footer>
                </section>
                <section className="my-holdings">
                    <header><h2>My Holdings in {props.companyName}</h2></header>
                    <section className="my-holdings-summary">
                        <ul>
                            {summary}
                        </ul>
                    </section>
                    <section className="certificates-container">
                        {cards}    
                    </section>
            </section>
            <StockClassDetailsModal data={props.modalData} />
        </div>
    );
}