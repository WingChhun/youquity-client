import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {investmentReducer} from './reducers';

const rootReducer = combineReducers({
    investment: investmentReducer,
    form: formReducer
});

export default createStore(rootReducer);