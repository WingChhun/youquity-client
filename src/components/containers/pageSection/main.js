import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import InvestorDashboard from '../view/investorDashboard';

import '../../../css/components/containers/pageSection/main.scss';

const investmentCards = [
        {
            companyName: 'Company A',
            totalInvestment: '$50,000',
            avgPricePerShare: '$10.00',
            numShares: '5,000',
            currentValuation: '$55,000',
            currentValPerShare: '$11.00',
            netChange: '+$5,000'
        },
        {
            companyName: 'Company B',
            totalInvestment: '$40,000',
            avgPricePerShare: '$1.00',
            numShares: '40,000',
            currentValuation: '$32,000',
            currentValPerShare: '$0.80',
            netChange: '-$8,000'
        },
        {
            companyName: 'Company C',
            totalInvestment: '$10,000',
            avgPricePerShare: '$2.00',
            numShares: '5,000',
            currentValuation: '$36,000',
            currentValPerShare: '$7.20',
            netChange: '+$26,000'
        }
    ];

export default function Main() {
    return (
        <Router>
            <Route
            exact path='/'
            render={(props) => <InvestorDashboard {...props} cardData={investmentCards} />}
        />
        </Router>
    );
}

