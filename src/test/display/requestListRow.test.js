import React from 'react';
import {shallow} from 'enzyme';

import RequestListRow from '../../components/display/requestListRow';

const rowData = {
    shareholderName: 'Bob Shareholder',
    sharesRequested: '10,000',
    status: 'Requested',
    href: '#'
};

describe('<RequestListRow />', () => {
    it('Renders without crashing.', () => {
        shallow(<RequestListRow data={rowData} />);
    });
});
