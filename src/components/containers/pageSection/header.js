import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPiggyBank} from '@fortawesome/free-solid-svg-icons'

import '../../../css/components/containers/pageSection/header.scss';

export default function Header() {
    return (
        <header className="page-header">
            <div className="main-heading-wrap">
                <div className="main-heading-logo-wrap">
                    <FontAwesomeIcon icon={faPiggyBank} className="main-heading-logo" />
                <h1 className="main-page-heading">YouQuity</h1>
                </div>
                <p className="main-page-subhead">Your Private Equity Manger</p>
            </div>
        </header>
    );
}

