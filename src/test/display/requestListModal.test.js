import React from 'react';
import {shallow} from 'enzyme';

import RequestListModal from '../../components/display/requestListModal';

const requestListData = {
    shareType: 'Class A',
    requests: [
        {
            shareholderName: 'Bob Shareholder',
            sharesRequested: '10,000',
            status: 'Requested',
            href: '#'
        },
        {
            shareholderName: 'Jill Shareholder',
            sharesRequested: '25,000',
            status: 'Pending',
            href: '#'
        },
        {
            shareholderName: 'Jim Shareholder',
            sharesRequested: '5,000',
            status: 'Pending',
            href: '#'
        },
    ]
};

describe('<RequestListModal />', () => {
    it('Renders without crashing.', () => {
        shallow(<RequestListModal data={requestListData} />);
    });
});
