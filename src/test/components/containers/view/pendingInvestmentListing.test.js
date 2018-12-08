import React from 'react';
import {shallow} from 'enzyme';

import { PendingInvestmentListing } from '../../../../components/containers/view/pendingInvestmentListing';

import * as redirectFuncs from '../../../../actions';
import InvestmentListingRow from '../../../../components/display/investmentListingRow';

describe('<PendingInvestmentListing />', () => {

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
            requestId: 1,
            certificateTitle: 'Jim Shareholder',
            numShares: '50,000',
            requestDate: '3/1/18',
            shareClassSlug: 'classA',
            workflow: [
                {
                    stepOrder: 1,
                    stepSlug: 'subsAgmt',
                    stepName: 'Subscription Agreement Received',
                    stepComplete: false,
                },
                {
                    stepOrder: 2,
                    stepSlug: 'pymtRecd',
                    stepName: 'Payment Received',
                    stepComplete: false,
                },
                {
                    stepOrder: 3,
                    stepSlug: 'certIssued',
                    stepName: 'Certificate Issued',
                    stepComplete: false,
                }
            ]
        },
        {
            requestId: 2,
            certificateTitle: 'Jill Shareholder',
            numShares: '10,000',
            requestDate: '3/1/18',
            shareClassSlug: 'classA',
            workflow: [
                {
                    stepOrder: 1,
                    stepSlug: 'subsAgmt',
                    stepName: 'Subscription Agreement Received',
                    stepComplete: false,
                },
                {
                    stepOrder: 2,
                    stepSlug: 'pymtRecd',
                    stepName: 'Payment Received',
                    stepComplete: false,
                },
                {
                    stepOrder: 3,
                    stepSlug: 'certIssued',
                    stepName: 'Certificate Issued',
                    stepComplete: false,
                }
            ]
        },
        {
            requestId: 3,
            certificateTitle: 'Bob Shareholder',
            numShares: '100,000',
            requestDate: '3/1/18',
            shareClassSlug: 'classA',
            workflow: [
                {
                    stepOrder: 1,
                    stepSlug: 'subsAgmt',
                    stepName: 'Subscription Agreement Received',
                    stepComplete: false,
                },
                {
                    stepOrder: 2,
                    stepSlug: 'pymtRecd',
                    stepName: 'Payment Received',
                    stepComplete: false,
                },
                {
                    stepOrder: 3,
                    stepSlug: 'certIssued',
                    stepName: 'Certificate Issued',
                    stepComplete: false,
                }
            ]
        }
    ];

    it('Renders without crashing.', () => {
        shallow(<PendingInvestmentListing stockTypes={stockTypes} requests={requests} />);
    });
    it('Dispatches clearRedirect action on componentDidMount if it has a redirect prop', () => {
        const spy = jest.spyOn(PendingInvestmentListing.prototype, 'componentDidMount');
        redirectFuncs.clearRedirect = jest.fn();
        const dispatch = jest.fn();
        const wrapper = shallow(<PendingInvestmentListing redirect={true} dispatch={dispatch} />);
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(redirectFuncs.clearRedirect());
    });
    it('Renders a list of pending stock', () => {
        const wrapper = shallow(<PendingInvestmentListing 
            stockTypes={stockTypes}
            requests={requests}
            isReady={true}
        />);
        expect(wrapper.find(InvestmentListingRow).length).toEqual(requests.length);
    });
});
