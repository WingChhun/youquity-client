import {createStore} from 'redux';

import {investmentReducer} from './reducers';

export default createStore(investmentReducer);