import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import InvestorDashboard from '../view/investorDashboard';
import InvestorCompanyDetail from '../view/investorCompanyDetail';
import SharePurchaseForm from '../../display/sharePurchaseForm';

import { dashboardData, companyDetailData, modalData, purchaseFormData } from '../../_temporaryData';

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
                        exact path='/investorCompanyDetail'
                        render={(props) => <InvestorCompanyDetail {...props} data={companyDetailData}
                        modalData={modalData}
                        purchaseFormData={purchaseFormData} />}
                    />
                    <Route
                        exact path='/'
                        render={(props) => <SharePurchaseForm {...props} data={purchaseFormData} />}
                    />
                </Switch>
            </Router>
        </main>
    );
}

