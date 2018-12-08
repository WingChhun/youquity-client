import React from 'react';
import {shallow} from 'enzyme';

import { IssueShares } from '../../../../components/containers/view/issueShares';

import IssueSharesForm from '../../../../components/forms/issueSharesForm';
import {Redirect} from 'react-router-dom';

const shareClasses = [
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

describe('<IssueShares />', () => {
    const match = { params: { investmentId: 1 } };
    it('Renders without crashing.', () => {
        shallow(<IssueShares shareClasses={shareClasses}/>);
    });
    it('Dispatches editInvestment on componentDidMount if it has an investmentId param', () => {
        const editInvestment = jest.fn();
        const pendingInvestments = [];
        const wrapper = shallow(<IssueShares
            match={match}
            editInvestment={editInvestment}
            pendingInvestments={pendingInvestments}
        />);
        expect(editInvestment).toHaveBeenCalledWith(match.params.investmentId, pendingInvestments);
    });
    it('Dispatches issueShares with correct arguments on form submit', () => {
        const issueShares = jest.fn();
        const wrapper = shallow(<IssueShares
            issueShares={issueShares}
            shareClasses={shareClasses}            
        />);
        wrapper.instance().handleSubmit('x');
        expect(issueShares).toHaveBeenCalledWith('x', null, null, shareClasses);
        const newIssueShares = jest.fn();
        const editInvestment = jest.fn();
        const newWrapper = shallow(<IssueShares 
            match={match}
            editingIndex='1'
            shareClasses={shareClasses}
            editInvestment={editInvestment}
            issueShares={newIssueShares}
        />);
        newWrapper.instance().handleSubmit('x');
        expect(newIssueShares).toHaveBeenCalledWith('x', '1', match.params.investmentId, shareClasses);
    });
    it('renders the issue shares form', () => {
        const wrapper = shallow(<IssueShares 
            isReady={true}
            shareClasses={shareClasses}
        />);
        expect(wrapper.find(IssueSharesForm).length).toBe(1);
    });
    it('redirects if it gets a redirect prop', () => {
        const wrapper = shallow(<IssueShares 
            isReady={true}
            redirect='/'
        />);
        expect(wrapper.find(Redirect).length).toBe(1);
    })
});
