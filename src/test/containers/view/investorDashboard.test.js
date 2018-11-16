import React from 'react';
import {shallow} from 'enzyme';

import InvestorDashboard from '../../../components/containers/view/investorDashboard';

const cards = [
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

describe('<InvestorDashboard />', () => {
    it('Renders without crashing.', () => {
        shallow(<InvestorDashboard cardData={cards} />);
    });
});
