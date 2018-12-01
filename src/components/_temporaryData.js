export const dashboardData = {
    investmentCards: [
        {
            cardTitle: 'Company A',
            cardData: [
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
            ],
            cardButtons: [
                {
                    className: 'more-details-btn',
                    buttonText: 'More Details'
                }
            ]
        },
        {
            cardTitle: 'Company B',
            cardData: [
                {
                    label: 'Total investment in Company B',
                    data: '$40,000'
                },
                {
                    label: 'Average Price Per Share',
                    data: '$1.00'
                },
                {
                    label: '# of Shares',
                    data: '40,000'
                },
                {
                    label: 'Current Valuation',
                    data: '$32,000 ($0.80/share)'
                },
                {
                    label: 'Net Gain/Loss',
                    data: '-$8,000'
                }
            ],
            cardButtons: [
                {
                    className: 'more-details-btn',
                    buttonText: 'More Details'
                }
            ]
        },
        {
            cardTitle: 'Company C',
            cardData: [
                {
                    label: 'Total investment in Company C',
                    data: '$10,000'
                },
                {
                    label: 'Average Price Per Share',
                    data: '$2.00'
                },
                {
                    label: '# of Shares',
                    data: '5,000'
                },
                {
                    label: 'Current Valuation',
                    data: '$36,000 ($7.20/share)'
                },
                {
                    label: 'Net Gain/Loss',
                    data: '+$26,000'
                }
            ],
            cardButtons: [
                {
                    className: 'more-details-btn',
                    buttonText: 'More Details'
                }
            ]
        },
    ],
    summaryData: [
        {
            label: 'Total Amount Invested',
            data: '$100,000'
        },
        {
            label: '# of Companies Invested In',
            data: 3
        },
        {
            label: 'Current Valuation',
            data: '$123,000'
        },
        {
            label: 'Net Gain/Loss',
            data: '+$23,000'
        }
    ]
}

export const companyDetailData = {
    companyName: 'Company A',
    summaryData: {
        summaryDetail: [
            {
                label: 'Total Authorized Shares',
                data: '10,000'
            },
            {
                label: 'Shares Outstanding',
                data: '3,982,348'
            },
            {
                label: 'Reserved Shares',
                data: '1,000,000'
            },
            {
                label: 'Current Valuation',
                data: '$42,815,828'
            }
        ],
        aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin leo vitae risus scelerisque convallis. Nullam at turpis dolor. Curabitur ornare ex et elit elementum fermentum. Proin elementum augue vel sem commodo aliquam. Nunc vitae justo a sapien blandit porta. In id justo dapibus, finibus ante id, vehicula enim. Donec rutrum sapien eget tempus ultricies. Nullam condimentum imperdiet ullamcorper. Cras lobortis semper eros quis gravida. Nulla hendrerit, mi quis tincidunt sodales, lectus mi rutrum nulla, at pharetra leo augue non leo. Curabitur cursus lobortis ex, in auctor dolor molestie ac. Proin egestas placerat enim vitae ornare.',
        myHoldings: [
            {
                label: 'My Total Investment in Company A',
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
        ]
    },
    certificates: [
        {
            cardTitle: '1,000 Shares',
            cardData: [
                {
                    label: 'Stock Class',
                    data: 'Preferred',
                    href: '#'
                },
                {
                    label: 'Purchase Data',
                    data: 'November 9, 2016'
                },
                {
                    label: 'Price Per Share',
                    data: '$7.00'
                },
                {
                    label: 'Current Valuation',
                    data: '$11,000 ($11.00/share)'
                },
                {
                    label: 'Net Gain/Loss',
                    data: '+$4,000'
                }
            ],
            cardButtons: [
                {
                    className: 'more-details-btn',
                    buttonText: 'More Details'
                }
            ]
        },
        {
            cardTitle: '4,000 Shares',
            cardData: [
                {
                    label: 'Stock Class',
                    data: 'Class A',
                    href: '#'
                },
                {
                    label: 'Purchase Data',
                    data: 'January 12 ,2018'
                },
                {
                    label: 'Price Per Share',
                    data: '$10.5'
                },
                {
                    label: 'Current Valuation',
                    data: '$44,000 ($11.00/share)'
                },
                {
                    label: 'Net Gain/Loss',
                    data: '+$1,000'
                }
            ],
            cardButtons: [
                {
                    className: 'more-details-btn',
                    buttonText: 'More Details'
                }
            ]
        }
    ],
};

export const modalData = {
    stockClass: 'Preferred',
    companyName: 'Company A',
    detailList: [
        {
            label: 'Share Type',
            data: 'Preferred',
        },
        {
            label: 'Par Value',
            data: '$0.80/share'
        },
        {
            label: 'Dividend Preference',
            data: 'Yes'
        },
        {
            label: 'Dividend Ratio',
            data: '8%'
        },
        {
            label: 'Convertible',
            data: 'Yes'
        },
        {
            label: 'Conversion Ratio',
            data: '7:1'
        },
        {
            label: 'Voting Rights',
            data: 'No'
        }
    ],
    otherDetails: 'Liquidation preference prior to Common Stock.  Cancelled shares may not be reissued.'
};

export const purchaseFormData = {
    companyName: 'Company A',
    availableTypes: [
        {
            typeSlug: 'classA',
            typeName: 'Class A',
            typePricePerShare: '$3.50'
        },
        {
            typeSlug: 'preferred',
            typeName: 'Preferred',
            typePricePerShare: '$7.00'
        }
    ]
};

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