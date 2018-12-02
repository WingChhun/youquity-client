import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import Wrapper from './components/containers/pageSection/wrapper';

import './css/index.scss';

ReactDOM.render(
    <Provider store={store}>
        <Wrapper />
    </Provider>, 
    document.getElementById('root')
);
