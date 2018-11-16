import React from 'react';
import {shallow} from 'enzyme';

import InvestmentDetailCard from '../../components/display/investmentDetailCard';

describe('<InvestmentDetailCard />', () => {
    it('Renders without crashing.', () => {
        shallow(<InvestmentDetailCard />);
    });
});
