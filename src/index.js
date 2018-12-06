import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import Wrapper from './components/containers/pageSection/wrapper';

import './css/index.scss';
import { LOGIN_SUCCESS } from './actions/login';
import {initializeData} from './actions/initialize';

const jwt = localStorage.getItem('jwt');
const user = localStorage.getItem('user');

if(jwt) {
    store.dispatch({type: LOGIN_SUCCESS, jwt, user});
    store.dispatch(initializeData());
}

ReactDOM.render(
    <Provider store={store}>
        <Wrapper />
    </Provider>, 
    document.getElementById('root')
);
