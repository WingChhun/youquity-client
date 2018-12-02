import {ADD_SHARE_CLASS, ISSUE_SHARES, CREATE_PENDING_SHARES} from '../actions';

const initialState = {
    companyData: {
        name: 'Company A',
        summaryData: [
            {
                label: 'Authorized Shares',
                data: '10,000,000'
            },
            {
                label: 'Issued Shares',
                data: '850,000'
            },
            {
                label: 'Reserved Shares',
                data: '100,000'
            }
        ],
        shareClasses: [
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
        ]
    },
    investmentData: {
        issued: [
            {
                certificateNum: 1,
                certificateTitle: 'Bob Shareholder',
                numShares: '100,000',
                pricePerShare: '$7.00',
                purchaseDate: '1/1/18',
                shareClassSlug: 'preferred',
                issueDate: '2/1/18',
            },
            {
                certificateNum: 2,
                certificateTitle: 'Jill Shareholder',
                numShares: '150,000',
                pricePerShare: '$7.00',
                purchaseDate: '1/1/18',
                shareClassSlug: 'preferred',
                issueDate: '2/1/18'
            },
            {
                certificateNum: 3,
                certificateTitle: 'Jim Shareholder',
                numShares: '50,000',
                pricePerShare: '$7.00',
                purchaseDate: '1/1/18',
                shareClassSlug: 'preferred',
                issueDate: '2/1/18'
            },
            {
                certificateNum: 4,
                certificateTitle: 'Bob Shareholder',
                numShares: '150,000',
                pricePerShare: '$3.50',
                purchaseDate: '3/1/18',
                shareClassSlug: 'classA',
                issueDate: '4/1/18'
            },
            {
                certificateNum: 5,
                certificateTitle: 'Jill Shareholder',
                numShares: '300,000',
                pricePerShare: '$3.50',
                purchaseDate: '3/1/18',
                shareClassSlug: 'classA',
                issueDate: '4/1/18'
            },
            {
                certificateNum: 6,
                certificateTitle: 'Jim Shareholder',
                numShares: '100,000',
                pricePerShare: '$3.50',
                purchaseDate: '3/1/18',
                shareClassSlug: 'classA',
                issueDate: '4/1/18'
            }
        ],
        pending: [
            {
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
                ]
            },
            {
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
                ]
            },
            {
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
                ]
            }
        ]
    },
    navData: {
        dashboard: {
            name: 'Dashboard',
            selected: true,
            destination: '/'
        },
        issueShares: {
            name: 'Issue Shares',
            selected: false,
            destination: '/issueShares'
        },
        showIssued: {
            name: 'Show Investments',
            selected: false,
            destination: '/investmentListing'
        },
        showPending: {
            name: 'Show Pending Investments',
            selected: false,
            destination: '/pending'
        },
        addShareClass: {
            name: 'Add Share Class',
            selected: false,
            destination: 'addShareClass'
        }
    }
};

// TODO: figure out redirects
// TODO: figure out how to update summary data on add share class
// TODO: figure out how to update share class when adding pending shares

export const investmentReducer = (state=initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case ADD_SHARE_CLASS:
            newState.companyData.shareClasses = [...newState.companyData.shareClasses, action.data];
            return newState;
        case ISSUE_SHARES:
            newState.investmentData.issued = [...newState.investmentData.issued, action.data];
            return newState;
        case CREATE_PENDING_SHARES:
            newState.investmentData.pending = [...newState.investmentData.pending, action.data];
            return newState;
        default:
            return newState;
    }
};