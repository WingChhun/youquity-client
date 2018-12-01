import React from 'react';
import {shallow} from 'enzyme';

import IssueShares from '../../../components/containers/view/issueShares';

describe('<IssueShares />', () => {
    it('Renders without crashing.', () => {
        shallow(<IssueShares />);
    });
});
