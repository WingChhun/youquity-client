import React from 'react';
import {shallow} from 'enzyme';

import InvestmentListingRow from '../../../components/display/investmentListingRow';

const data = {
    certNum: 1,
    certTitle: 'Bob Shareholder',
    numShares: '10,000',
    purchaseDate: '1/1/18',
    shareClass: 'Preferred'
};

describe('<InvestmentListingRow />', () => {
    it('Renders without crashing.', () => {
        shallow(<InvestmentListingRow data={data}/>);
    });
    it('renders a div with the class investment-listing-row-wrapper', () => {
        const wrapper = shallow(<InvestmentListingRow data={data} />);
        expect(wrapper.hasClass('investment-listing-row-wrapper')).toEqual(true);
    });
});
