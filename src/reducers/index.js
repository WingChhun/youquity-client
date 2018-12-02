import * as actions from '../actions';

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
        ]
    },
    investmentData: {
        issued: [
            {
                certificateNum: 1,
                certificateTitle: 'Bob Shareholder',
                numShares: 100000,
                pricePerShare: 7,
                purchaseDate: '1/1/18',
                shareClassSlug: 'preferred',
                issueDate: '2/1/18',
            },
            {
                certificateNum: 2,
                certificateTitle: 'Jill Shareholder',
                numShares: 150000,
                pricePerShare: 7,
                purchaseDate: '1/1/18',
                shareClassSlug: 'preferred',
                issueDate: '2/1/18'
            },
            {
                certificateNum: 3,
                certificateTitle: 'Jim Shareholder',
                numShares: 50000,
                pricePerShare: 7,
                purchaseDate: '1/1/18',
                shareClassSlug: 'preferred',
                issueDate: '2/1/18'
            },
            {
                certificateNum: 4,
                certificateTitle: 'Bob Shareholder',
                numShares: 150000,
                pricePerShare: 3.5,
                purchaseDate: '3/1/18',
                shareClassSlug: 'classA',
                issueDate: '4/1/18'
            },
            {
                certificateNum: 5,
                certificateTitle: 'Jill Shareholder',
                numShares: 300000,
                pricePerShare: 3.5,
                purchaseDate: '3/1/18',
                shareClassSlug: 'classA',
                issueDate: '4/1/18'
            },
            {
                certificateNum: 6,
                certificateTitle: 'Jim Shareholder',
                numShares: 100000,
                pricePerShare: 3.5,
                purchaseDate: '3/1/18',
                shareClassSlug: 'classA',
                issueDate: '4/1/18'
            }
        ],
        pending: [
            {
                requestId: 1,
                certificateTitle: 'Jim Shareholder',
                numShares: 50000,
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
                numShares: 10000,
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
                numShares: 100000,
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
        ]
    }
};

export const investmentReducer = (state=initialState, action) => {
    return state;
};