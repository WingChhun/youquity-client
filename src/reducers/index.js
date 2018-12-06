import {CLEAR_REDIRECT} from '../actions';

import {INITIALIZE_DATA_REQUEST, INITIALIZE_DATA_ERROR, INITIALIZE_DATA_SUCCESS} from '../actions/initialize';

import {ADD_SHARE_CLASS_REQUEST, ADD_SHARE_CLASS_SUCCESS, ADD_SHARE_CLASS_ERROR} from '../actions/shareClass';

import {ISSUE_SHARES_ERROR, ISSUE_SHARES_REQUEST, ISSUE_SHARES_SUCCESS} from '../actions/issueShares';

import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/login'

import {LOGOUT} from '../actions/logout';

const initialState = {
    companyData: {},
    investmentData: {},
    navData: {
        login: {
            name: 'Login',
            selected: true,
            destination: '/login'
        }
    },
    isReady: false,
    error: false,
    redirect: false,
    loading: false,
    jwt: null,
    user: null
};

const links = {
    dashboard: {
        name: 'Dashboard',
        selected: true,
        destination: '/'
    },
    issueShares: {
        name: 'Issue Shares',
        selected: false,
        destination: '/issueShares'
    },
    showIssued: {
        name: 'Show Investments',
        selected: false,
        destination: '/investmentListing'
    },
    showPending: {
        name: 'Show Pending Investments',
        selected: false,
        destination: '/pending'
    },
    addShareClass: {
        name: 'Add Share Class',
        selected: false,
        destination: '/addShareClass'
    },
    logout: {
        name: 'Log Out',
        selected: false,
        destination: '/logout'
    }
};

export const investmentReducer = (state=initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case LOGIN_REQUEST:
            newState.loading = true;
            return newState;
        case LOGIN_SUCCESS:
            newState.loading = false;
            newState.jwt = action.jwt;
            newState.user = action.user;
            newState.navData = links;
            return newState;
        case LOGIN_ERROR:
            newState.loading = false;
            newState.error = action.err;
            return newState;
        case CLEAR_REDIRECT:
            newState.redirect = false;
            return newState;
        case ADD_SHARE_CLASS_REQUEST:
            newState.loading = true;
            return newState;
        case ADD_SHARE_CLASS_SUCCESS:
            newState.companyData.shareClasses.push(action.data);
            newState.redirect = '/';
            newState.loading = false;
            return newState;
        case ADD_SHARE_CLASS_ERROR:
            newState.loading = false;
            newState.error = action.err;
            return newState;
        case INITIALIZE_DATA_REQUEST:
            newState.loading = true;
            newState.isReady = false;
            return newState;
        case INITIALIZE_DATA_SUCCESS:
            newState.companyData = {...action.data.companyData}
            newState.investmentData = {...action.data.investmentData};
            newState.isReady = true;
            newState.loading = false;
            return newState;
        case INITIALIZE_DATA_ERROR:
            newState.loading = false;
            newState.isReady = true;
            newState.error = action.err;
            return newState;
        case ISSUE_SHARES_ERROR:
            newState.loading = false;
            newState.err = action.err;
            return newState;
        case ISSUE_SHARES_REQUEST:
            newState.loading = true;
            return newState;
        case ISSUE_SHARES_SUCCESS:
            newState.investmentData[action.issueType].push(action.data);
            newState.loading = false;
            newState.redirect = (action.issueType === 'pending' ? '/pending' : '/investmentListing');
            return newState
        case LOGOUT:
            return {...initialState};
        default:
            return state;
    }
};