import React from 'react';

import InvestmentDetailCard from '../../display/investmentDetailCard';
import DataListElement from '../../display/dataListElement';
import StockClassDetailsModal from '../../display/stockClassDetailsModal';
import SharePurchaseForm from '../../display/sharePurchaseForm';

import '../../../css/components/containers/view/investorCompanyDetail.scss';

export default function InvestorCompanyDetail(props) {
    const summary = props.data.summaryData.summaryDetail.map((line, i) => {
        return(
            <DataListElement 
                key={i}
                data={line}
            />
        );
    });

    const myHoldings = props.data.summaryData.myHoldings.map(
        (line, i) => {
            return(
                <DataListElement
                    key={i}
                    data={line}
                />
            )
        }
    );

    const cards = props.data.certificates.map((card, i) => {
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
                    <h2>About {props.data.companyName}</h2>
                    <ul>
                        {summary}
                    </ul>
                    <p className="company-about">
                        {props.data.summaryData.aboutText}
                    </p>
                    <footer>
                        <SharePurchaseForm data={props.purchaseFormData} />
                        <button>Purchase Additional Shares</button>
                    </footer>
                </section>
                <section className="my-holdings">
                    <header><h2>My Holdings in {props.data.companyName}</h2></header>
                    <section className="my-holdings-summary">
                        <ul>
                            {myHoldings}
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