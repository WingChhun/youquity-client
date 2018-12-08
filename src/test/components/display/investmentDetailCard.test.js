import React from 'react';
import {shallow} from 'enzyme';

import InvestmentDetailCard from '../../../components/display/investmentDetailCard';

import DataListElement from '../../../components/display/dataListElement';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const cardData = [
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
    ];

describe('<InvestmentDetailCard />', () => {
    it('Renders without crashing.', () => {
        shallow(<InvestmentDetailCard cardData={cardData} />);
    });
    it('renders with the class investment-detail-card', () => {
        const wrapper = shallow(<InvestmentDetailCard cardData={cardData} />);
        expect(wrapper.hasClass('investment-detail-card')).toEqual(true);
    });
    it('renders a data list element for each cardData element', () => {
        const wrapper = shallow(<InvestmentDetailCard cardData={cardData} />);
        expect(wrapper.find(DataListElement).length).toEqual(cardData.length);
    });
    it('renders a fontawesome icon', () => {
        const wrapper = shallow(<InvestmentDetailCard cardData={cardData} />);
        expect(wrapper.find(FontAwesomeIcon).length).toEqual(1);
    });
});
