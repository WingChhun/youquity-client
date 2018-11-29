import React from 'react';
import {shallow} from 'enzyme';

import StockClassDetailsModal from '../../components/display/stockClassDetailsModal';

const data ={
    detailList: [
        {
            label: 'Share Type',
            data: 'Preferred',
        }
    ]
};

describe('<StockClassDetailsModal />', () => {
    it('Renders without crashing.', () => {
        shallow(<StockClassDetailsModal data={data} />);
    });
});
