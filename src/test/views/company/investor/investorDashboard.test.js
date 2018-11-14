import React from 'react';
import {shallow} from 'enzyme';

import InvestorDashboard from '../../../../components/views/investor/investorDashboard';
describe('<InvestorDashboard />', () => {
    it('Renders without crashing.', () => {
        shallow(<InvestorDashboard />);
    });
});
