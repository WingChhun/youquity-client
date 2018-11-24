import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import InvestorDashboard from '../view/investorDashboard';
import InvestorCompanyDetail from '../view/investorCompanyDetail';

import { dashboardData, companyDetailData } from '../../_temporaryData';

import '../../../css/components/containers/pageSection/main.scss';

export default function Main() {
    return (
        <main className="main-container">
            <Router>
                <Switch>
                    <Route
                        exact path='/dashboard'
                        render={(props) => <InvestorDashboard {...props} cardData={dashboardData.investmentCards} summaryData={dashboardData.summaryData} />}
                    />
                    <Route
                        exact path='/'
                        render={(props) => <InvestorCompanyDetail {...props} companyName={companyDetailData.companyName} summaryData={companyDetailData.summaryData} certificates={companyDetailData.certificates} />}
                    />
                </Switch>
            </Router>
        </main>
    );
}

