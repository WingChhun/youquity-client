import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import InvestorDashboard from '../view/investorDashboard';
import InvestorCompanyDetail from '../view/investorCompanyDetail';
import StockClassDetailsModal from '../../display/stockClassDetailsModal';

import { dashboardData, companyDetailData, modalData } from '../../_temporaryData';

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
                        render={(props) => <InvestorCompanyDetail {...props} companyName={companyDetailData.companyName} summaryData={companyDetailData.summaryData} certificates={companyDetailData.certificates} />}
                    />
                    <Route
                        exact path='/'
                        render={(props) => <StockClassDetailsModal {...props}
                            data={modalData} />}
                    />
                </Switch>
            </Router>
        </main>
    );
}

