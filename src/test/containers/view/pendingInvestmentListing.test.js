import React from 'react';
import {shallow} from 'enzyme';

import PendingInvestmentListing from '../../../components/containers/view/pendingInvestmentListing';

describe('<PendingInvestmentListing />', () => {
    it('Renders without crashing.', () => {
        shallow(<PendingInvestmentListing />);
    });
});
