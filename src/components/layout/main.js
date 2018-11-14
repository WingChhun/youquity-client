import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import InvestorDashboard from '../views/investor/investorDashboard';

import '../../css/layout/main.scss';

export default function Main() {
    return (
        <Router>
            <Route exact path="/" component={InvestorDashboard} />
        </Router>
    );
}

