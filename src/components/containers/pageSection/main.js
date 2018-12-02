import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CompanyProfile from '../view/companyProfile';
import IssueShares from '../view/issueShares';
import InvestmentListing from '../view/investmentListing';
import PendingInvestmentListing from '../view/pendingInvestmentListing';
import AddShareClass from '../view/addShareClass';

import '../../../css/components/containers/pageSection/main.scss';

export default function Main() {
    return (
        <main className="main-container">
            <Switch>
                <Route
                    exact path='/'
                    component={CompanyProfile}
                />
                <Route
                    exact path='/issueShares'
                    component={IssueShares}
                />
                <Route
                    exact path='/investmentListing'
                    component={InvestmentListing}
                />
                <Route
                    exact path='/pending'
                    component={PendingInvestmentListing}
                />
                <Route
                    exact path='/addShareClass'
                    component={AddShareClass}
                />
            </Switch>
        </main>
    );
}

