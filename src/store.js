import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {investmentReducer} from './reducers';

const rootReducer = combineReducers({
    investment: investmentReducer,
    form: formReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));