import React from 'react';
import {shallow} from 'enzyme';

import InvestmentDetailCard from '../../components/display/investmentDetailCard';

const card = {
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
};

describe('<InvestmentDetailCard />', () => {
    it('Renders without crashing.', () => {
        shallow(<InvestmentDetailCard data={card} />);
    });
});
