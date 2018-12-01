import React from 'react';
import {shallow} from 'enzyme';

import InvestmentListing from '../../../components/containers/view/investmentListing';

const investmentListingData = {
    certificates: [
        {
            certNum: 1,
            certTitle: 'Bob Shareholder',
            numShares: '10,000',
            purchaseDate: '1/1/18',
            shareClass: 'Preferred'
        },
        {
            certNum: 2,
            certTitle: 'Bob Shareholder',
            numShares: '10,000',
            purchaseDate: '1/1/18',
            shareClass: 'Preferred'
        },
        {
            certNum: 3,
            certTitle: 'Bob Shareholder',
            numShares: '10,000',
            purchaseDate: '1/1/18',
            shareClass: 'Class A'
        },
        {
            certNum: 4,
            certTitle: 'Bob Shareholder',
            numShares: '10,000',
            purchaseDate: '1/1/18',
            shareClass: 'Class A'
        },
        {
            certNum: 5,
            certTitle: 'Bob Shareholder',
            numShares: '10,000',
            purchaseDate: '1/1/18',
            shareClass: 'Class A'
        },
        {
            certNum: 6,
            certTitle: 'Bob Shareholder',
            numShares: '10,000',
            purchaseDate: '1/1/18',
            shareClass: 'Class A'
        },
        {
            certNum: 7,
            certTitle: 'Bob Shareholder',
            numShares: '10,000',
            purchaseDate: '1/1/18',
            shareClass: 'Preferred'
        },
        {
            certNum: 8,
            certTitle: 'Bob Shareholder',
            numShares: '10,000',
            purchaseDate: '1/1/18',
            shareClass: 'Class A'
        },
    ]
};

describe('<InvestmentListing />', () => {
    it('Renders without crashing.', () => {
        shallow(<InvestmentListing data={investmentListingData} />);
    });
});
