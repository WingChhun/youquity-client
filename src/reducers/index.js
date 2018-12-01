import * as actions from '../actions';

const initialState = {
    companyData: {
        name: 'Company A',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam sollicitudin leo vitae risus scelerisque convallis.Nullam at turpis dolor.Curabitur ornare ex et elit elementum fermentum.Proin elementum augue vel sem commodo aliquam.Nunc vitae justo a sapien blandit porta.In id justo dapibus, finibus ante id, vehicula enim.Donec rutrum sapien eget tempus ultricies.Nullam condimentum imperdiet ullamcorper.Cras lobortis semper eros quis gravida.Nulla hendrerit, mi quis tincidunt sodales, lectus mi rutrum nulla, at pharetra leo augue non leo.Curabitur cursus lobortis ex, in auctor dolor molestie ac.Proin egestas placerat enim vitae ornare.',
        shareClasses: [
            {
                classSlug: 'classA',
                className: 'Class A',
                classData: [
                    {
                        dataSlug: 'authedShares',
                        dataName: 'Authorized Shares',
                        data: 9000000,
                        editable: true
                    },
                    {
                        dataSlug: 'reservedShares',
                        dataName: 'Reserved Shares',
                        data: 100000,
                        editable: true
                    },
                    {
                        dataSlug: 'currentlyOffered',
                        dataName: 'Currently Offered',
                        data: true,
                        editable: true
                    },
                    {
                        dataSlug: 'currentPrice',
                        dataName: 'Current Price per Share',
                        data: 4,
                        editable: true
                    }
                ]
            },
            {
                classSlug: 'preferred',
                className: 'Preferred',
                classData: [
                    {
                        dataSlug: 'authedShares',
                        dataName: 'Authorized Shares',
                        data: 1000000,
                        editable: true
                    },
                    {
                        dataSlug: 'reservedShares',
                        dataName: 'Reserved Shares',
                        data: 0,
                        editable: true
                    },
                    {
                        dataSlug: 'currentlyOffered',
                        dataName: 'Currently Offered',
                        data: false,
                        editable: true
                    },
                    {
                        dataSlug: 'currentPrice',
                        dataName: 'Current Price per Share',
                        data: 0,
                        editable: true
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