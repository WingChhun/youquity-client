import React from 'react';
import {shallow} from 'enzyme';

import DataListElement from '../../../components/display/dataListElement';

const data = {
    label: 'Total investment in Company A',
    data: '$50,000'
};

describe('<DataListElement />', () => {
    it('Renders without crashing.', () => {
        shallow(<DataListElement data={data} />);
    });
});
