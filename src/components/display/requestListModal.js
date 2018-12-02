import React from 'react';

import RequestListRow from './requestListRow';

import '../../css/components/display/requestListModal.scss';

export default function RequestList(props) {
    const requests = props.requestData.map((request, i) => {
        return(
            <RequestListRow key={i} data={request} />
        );
    });

    return (
        <div className="modal-wrapper hidden">
            <section className="modal">
                <header className="modal-header">
                    <div className="button-wrapper">
                        <button className="close-button">Close</button>
                    </div>
                    <h3 className="heading">Pending Requests</h3>
                </header>
                <section className="modal-details">
                    <table className="request-list-table">
                        <tr>
                            <th class="request-list-column-header">Shareholder</th>
                            <th class="request-list-column-header">Num Shares</th>
                            <th class="request-list-column-header">Status</th>
                        </tr>
                        {requests}
                    </table>
                </section>
            </section>
        </div>
    );
}