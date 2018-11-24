import React from 'react';
import {shallow} from 'enzyme';

import InvestorCompanyDetail from '../../../components/containers/view/investorCompanyDetail';

const companyDetailData = {
  companyName: "Company A",
  summaryData: {
    summaryDetail: [
      {
        label: "Total Authorized Shares",
        data: "10,000"
      },
      {
        label: "Shares Outstanding",
        data: "3,982,348"
      },
      {
        label: "Reserved Shares",
        data: "1,000,000"
      },
      {
        label: "Current Valuation",
        data: "$42,815,828"
      }
    ],
    aboutText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin leo vitae risus scelerisque convallis. Nullam at turpis dolor. Curabitur ornare ex et elit elementum fermentum. Proin elementum augue vel sem commodo aliquam. Nunc vitae justo a sapien blandit porta. In id justo dapibus, finibus ante id, vehicula enim. Donec rutrum sapien eget tempus ultricies. Nullam condimentum imperdiet ullamcorper. Cras lobortis semper eros quis gravida. Nulla hendrerit, mi quis tincidunt sodales, lectus mi rutrum nulla, at pharetra leo augue non leo. Curabitur cursus lobortis ex, in auctor dolor molestie ac. Proin egestas placerat enim vitae ornare."
  },
  certificates: [
    {
      cardTitle: "1,000 Shares",
      Data: [
        {
          label: "Stock Class",
          data: '<a href="#">Preferred</a>'
        },
        {
          label: "Purchase Data",
          data: "November 9, 2016"
        },
        {
          label: "Price Per Share",
          data: "$7.00"
        },
        {
          label: "Current Valuation",
          data: "$11,000 ($11.00/share)"
        },
        {
          label: "Net Gain/Loss",
          data: "+$4,000"
        }
      ]
    },
    {
      cardTitle: "4,000 Shares",
      cardData: [
        {
          label: "Stock Class",
          data: '<a href="#">Class A</a>'
        },
        {
          label: "Purchase Data",
          data: "January 12 ,2018"
        },
        {
          label: "Price Per Share",
          data: "$10.5"
        },
        {
          label: "Current Valuation",
          data: "$44,000 ($11.00/share)"
        },
        {
          label: "Net Gain/Loss",
          data: "+$1,000"
        }
      ]
    }
  ]
};

describe('<InvestorCompanyDetail />', () => {
    it('Renders without crashing.', () => {
        shallow(<InvestorCompanyDetail companyName={companyDetailData.companyName} summaryData={companyDetailData.summaryData} certificates={companyDetailData.certificates} />);
    });
});
