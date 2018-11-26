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
            ]
        }
    ],
};