import React from 'react';
import {shallow} from 'enzyme';

import InvestorDashboard from '../../../components/containers/view/investorDashboard';

const summaryData = [
    {
        label: 'Total Amount Invested',
        data: '$100,000'
    },
    {
        label: '# of Companies Invested In',
        data: 3
    },
    {
        label: 'Current Valuation',
        data: '$123,000'
    },
    {
        label: 'Net Gain/Loss',
        data: '+$23,000'
    }
];

const investmentCards = [
    {
        cardTitle: 'Company A',
        cardData: [
            {
                label: 'Total investment in Company A',
                data: '$50,000'
            },
            {
                label: 'Average Price Per Share',
                data: '$10.00'
            },
            {
                label: '# of Shares',
                data: '5,000'
            },
            {
                label: 'Current Valuation',
                data: '$55,000 ($11.00/share)'
            },
            {
                label: 'Net Gain/Loss',
                data: '+$5,000'
            }
        ]
    },
    {
        cardTitle: 'Company B',
        cardData: [
            {
                label: 'Total investment in Company B',
                data: '$40,000'
            },
            {
                label: 'Average Price Per Share',
                data: '$1.00'
            },
            {
                label: '# of Shares',
                data: '40,000'
            },
            {
                label: 'Current Valuation',
                data: '$32,000 ($0.80/share)'
            },
            {
                label: 'Net Gain/Loss',
                data: '-$8,000'
            }
        ]
    },
    {
        cardTitle: 'Company C',
        cardData: [
            {
                label: 'Total investment in Company C',
                data: '$10,000'
            },
            {
                label: 'Average Price Per Share',
                data: '$2.00'
            },
            {
                label: '# of Shares',
                data: '5,000'
            },
            {
                label: 'Current Valuation',
                data: '$36,000 ($7.20/share)'
            },
            {
                label: 'Net Gain/Loss',
                data: '+$26,000'
            }
        ]
    },
];

describe('<InvestorDashboard />', () => {
    it('Renders without crashing.', () => {
        shallow(<InvestorDashboard summaryData={summaryData} cardData={investmentCards} />);
    });
});
