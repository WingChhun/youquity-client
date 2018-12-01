import React from 'react';
import {shallow} from 'enzyme';

import SharePurchaseForm from '../../components/display/sharePurchaseForm'; 

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

describe('<SharePurchaseForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<SharePurchaseForm data={purchaseFormData} />);
    });
});
