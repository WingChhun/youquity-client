import React from 'react';

import './dataListElement';

import '../../css/components/display/stockClassDetailsModal.scss';
import DataListElement from './dataListElement';

export default function StockClassDetailsModal(props) {
    const details = props.data.detailList.map((line, i) => {
        return (
            <DataListElement
                key={i}
                data={line}
            />
        );
    });
    
    return (
        <div className="modal-wrapper hidden">
            <section className="modal">
                <header className="modal-header">
                    <div className="button-wrapper">
                        <button className="close-button">Close</button>
                    </div>
                    <h3 className="heading">{props.data.stockClass} Stock Characteristics</h3>
                    <p className="subhead">for {props.data.companyName}</p>
                </header>
                <section className="modal-details">
                    <ul className="detail-list">
                        {details}
                    </ul>
                    <h4 className="heading">Other Details:</h4>
                    <p className="other-details">
                        Liquidation preference prior to Common Stock.  Cancelled shares may not be reissued.
                    </p>
                </section>
            </section>
        </div>
    );
}