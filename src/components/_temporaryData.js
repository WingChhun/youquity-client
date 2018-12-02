export const companyProfileData = {
    companyName: 'Company A',
    aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin leo vitae risus scelerisque convallis. Nullam at turpis dolor. Curabitur ornare ex et elit elementum fermentum. Proin elementum augue vel sem commodo aliquam. Nunc vitae justo a sapien blandit porta. In id justo dapibus, finibus ante id, vehicula enim. Donec rutrum sapien eget tempus ultricies. Nullam condimentum imperdiet ullamcorper. Cras lobortis semper eros quis gravida. Nulla hendrerit, mi quis tincidunt sodales, lectus mi rutrum nulla, at pharetra leo augue non leo. Curabitur cursus lobortis ex, in auctor dolor molestie ac. Proin egestas placerat enim vitae ornare.',
    summaryData: [
        {
            label: 'Authorized Shares',
            data: '10,000,000'
        },
        {
            label: 'Issued Shares',
            data: '3,982,235'
        },
        {
            label: 'Reserved Shares',
            data: '100,000'
        }
    ],
    stockTypes: [
        {
            cardTitle: 'Class A Stock',
            cardData: [
                {
                    label: 'Authorized Shares',
                    data: '9,000,000',
                    editable: true
                },
                {
                    label: 'Issued Shares',
                    data: '3,782,235',
                    editable: false
                },
                {
                    label: 'Reserved Shares',
                    data: '100,000', 
                    editable: true
                },
                {
                    label: 'Requests Pending?',
                    data: 'Yes',
                    editable: false,
                    href: '#'
                }
            ],
            cardButtons: [
                {
                    className: 'issue-stock-btn',
                    buttonText: 'Issue Shares'
                },
                {
                    className: 'view-issued-stock-btn',
                    buttonText: 'View Issued Stock'
                }
            ]
        },
        {
            cardTitle: 'Preferred Stock',
            cardData: [
                {
                    label: 'Authorized Shares',
                    data: '1,000,000',
                    editable: true
                },
                {
                    label: 'Issued Shares',
                    data: '200,000',
                    editable: false
                },
                {
                    label: 'Reserved Shares',
                    data: '0',
                    editable: true
                },
                {
                    label: 'Requests Pending?',
                    data: 'No',
                    editable: false
                }
            ],
            cardButtons: [
                {
                    className: 'issue-stock-btn',
                    buttonText: 'Issue Shares'
                },
                {
                    className: 'view-issued-stock-btn',
                    buttonText: 'View Issued Stock'
                }
            ]
        }
    ]


};

export const investmentListingData = {
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

export const requestListData = {
    shareType: 'Class A',
    requests: [
        {
            shareholderName: 'Bob Shareholder',
            sharesRequested: '10,000',
            status: 'Requested',
            href: '#'
        },
        {
            shareholderName: 'Jill Shareholder',
            sharesRequested: '25,000',
            status: 'Pending',
            href: '#'
        },
        {
            shareholderName: 'Jim Shareholder',
            sharesRequested: '5,000',
            status: 'Pending',
            href: '#'
        },
    ]
};