import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CompanyProfile from '../view/companyProfile';
import IssueShares from '../view/issueShares';
import InvestmentListing from '../view/investmentListing';

import { companyProfileData, investmentListingData, requestListData } from '../../_temporaryData';

import '../../../css/components/containers/pageSection/main.scss';

export default function Main() {
    return (
        <main className="main-container">
            <Router>
                <Switch>
                    <Route
                        exact path='/'
                        render={(props) => <CompanyProfile {...props} data={companyProfileData} requestListData={requestListData} />}
                    />
                    <Route
                        exact path='/issueShares'
                        render={(props) => <IssueShares {...props} />}
                    />
                    <Route
                        exact path='/investmentListing'
                        render={(props) => <InvestmentListing {...props} data={investmentListingData} />}
                    />
                </Switch>
            </Router>
        </main>
    );
}

