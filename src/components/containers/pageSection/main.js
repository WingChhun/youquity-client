import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CompanyProfile from '../view/companyProfile';
import IssueShares from '../view/issueShares';
import InvestmentListing from '../view/investmentListing';

import '../../../css/components/containers/pageSection/main.scss';

export default function Main() {
    return (
        <main className="main-container">
            <Router>
                <Switch>
                    <Route
                        exact path='/'
                        component={CompanyProfile}
                    />
                    <Route
                        exact path='/issueShares'
                        render={(props) => <IssueShares {...props} />}
                    />
                    <Route
                        exact path='/investmentListing'
                        component={InvestmentListing}
                    />
                </Switch>
            </Router>
        </main>
    );
}

