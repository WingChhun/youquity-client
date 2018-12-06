import {ISSUE_SHARES, CREATE_PENDING_SHARES, CLEAR_REDIRECT} from '../actions';

import {INITIALIZE_DATA_REQUEST, INITIALIZE_DATA_ERROR, INITIALIZE_DATA_SUCCESS} from '../actions/initialize';

import {ADD_SHARE_CLASS_REQUEST, ADD_SHARE_CLASS_SUCCESS, ADD_SHARE_CLASS_ERROR} from '../actions/shareClass';

const initialState = {
    companyData: {},
    investmentData: {},
    navData: {
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
            destination: 'addShareClass'
        }
    },
    isReady: false,
    error: false,
    redirect: false,
    loading: false
};

// TODO: figure out redirects
// TODO: figure out how to update summary data on add share class
// TODO: figure out how to update share class when adding pending shares

export const investmentReducer = (state=initialState, action) => {
    const newState = {...state};
    switch(action.type) {
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
        case ISSUE_SHARES:
            newState.investmentData.issued = [...newState.investmentData.issued, action.data];
            return newState;
        case CREATE_PENDING_SHARES:
            newState.investmentData.pending = [...newState.investmentData.pending, action.data];
            return newState;
        case INITIALIZE_DATA_REQUEST:
            return newState;
        case INITIALIZE_DATA_SUCCESS:
            newState.companyData = {...action.data.companyData}
            newState.investmentData = {...action.data.investmentData};
            newState.isReady = true;
            return newState;
        case INITIALIZE_DATA_ERROR:
            return newState;
        default:
            return newState;
    }
};