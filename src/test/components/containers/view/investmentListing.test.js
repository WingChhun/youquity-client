import React from 'react';
import {shallow} from 'enzyme';

import { InvestmentListing } from '../../../../components/containers/view/investmentListing';

import * as redirectFuncs from '../../../../actions';
import InvestmentListingRow from '../../../../components/display/investmentListingRow';

const stockTypes = [
    {
        classSlug: 'classA',
        className: 'Class A',
        currentlyOffered: true,
        classData: [
            {
                dataSlug: 'authedShares',
                dataName: 'Authorized Shares',
                data: '9,000,000',
                editable: true
            },
            {
                dataSlug: 'issuedShares',
                dataName: 'Issued Shares',
                data: '550,000',
                editable: false
            },
            {
                dataSlug: 'reservedShares',
                dataName: 'Reserved Shares',
                data: '100,000',
                editable: true
            },
            {
                dataSlug: 'currentlyOffered',
                dataName: 'Currently Offered',
                data: 'Yes',
                editable: true
            },
            {
                dataSlug: 'currentPrice',
                dataName: 'Current Price per Share',
                data: '$4.00',
                editable: true
            },
            {
                dataSlug: 'requestsPending',
                dataName: 'Requests Pending',
                data: 'Yes',
                editable: false,
                href: '#'
            }
        ]
    },
    {
        classSlug: 'preferred',
        className: 'Preferred',
        currentlyOffered: false,
        classData: [
            {
                dataSlug: 'authedShares',
                dataName: 'Authorized Shares',
                data: '1,000,000',
                editable: true
            },
            {
                dataSlug: 'issuedShares',
                dataName: 'Issued Shares',
                data: '300,000',
                editable: false
            },
            {
                dataSlug: 'reservedShares',
                dataName: 'Reserved Shares',
                data: '0',
                editable: true
            },
            {
                dataSlug: 'currentlyOffered',
                dataName: 'Currently Offered',
                data: 'No',
                editable: true
            },
            {
                dataSlug: 'currentPrice',
                dataName: 'Current Price per Share',
                data: '0',
                editable: true
            },
            {
                dataSlug: 'requestsPending',
                dataName: 'Requests Pending',
                data: 'No',
                editable: false
            }
        ]
    },
];


const requests = [
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
    ];

describe('<InvestmentListing />', () => {
    it('Renders without crashing.', () => {
        shallow(<InvestmentListing certificates={requests} stockTypes={stockTypes} />);
    });
    it('Dispatches clearRedirect action on componentDidMount if it has a redirect prop', () => {
        const spy = jest.spyOn(InvestmentListing.prototype, 'componentDidMount');
        redirectFuncs.clearRedirect = jest.fn();
        const dispatch = jest.fn();
        const wrapper = shallow(<InvestmentListing redirect={true} dispatch={dispatch} />);
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(redirectFuncs.clearRedirect());
    });
    it('Renders a list of pending stock', () => {
        const wrapper = shallow(<InvestmentListing
            stockTypes={stockTypes}
            certificates={requests}
            isReady={true}
        />);
        expect(wrapper.find(InvestmentListingRow).length).toEqual(requests.length);
    });
});
