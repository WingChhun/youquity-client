import React from 'react';
import {shallow} from 'enzyme';

import CompanyProfile from '../../../components/containers/view/companyProfile';

const companyProfileData = {
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

describe('<CompanyProfile />', () => {
    it('Renders without crashing.', () => {
        shallow(<CompanyProfile data={companyProfileData} />);
    });
});
