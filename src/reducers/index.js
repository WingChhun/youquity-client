import {CLEAR_REDIRECT} from '../actions';

import {INITIALIZE_DATA_REQUEST, INITIALIZE_DATA_ERROR, INITIALIZE_DATA_SUCCESS} from '../actions/initialize';

import {ADD_SHARE_CLASS_REQUEST, ADD_SHARE_CLASS_SUCCESS, ADD_SHARE_CLASS_ERROR} from '../actions/shareClass';

import {ISSUE_SHARES_ERROR, ISSUE_SHARES_REQUEST, ISSUE_SHARES_SUCCESS, UPDATE_SHARES_SUCCESS} from '../actions/issueShares';

import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/login'

import {LOGOUT} from '../actions/logout';

import {FIND_INVESTMENT_TO_EDIT_FAILURE, FIND_INVESTMENT_TO_EDIT_SUCCESS} from '../actions/editInvestment';

import { DELETE_PENDING_ERROR, DELETE_PENDING_REQUEST, DELETE_PENDING_SUCCESS } from '../actions/deletePending';
import { stat } from 'fs';


export const initialState = {
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
    user: null,
    editing: null,
    editingIndex: null,
    editingId: null,
    erroredId: null,
    erroredIndex: null
};

export const links = {
    dashboard: {
        name: 'Dashboard',
        selected: true,
        destination: '/',
        class: 'dashboard'
    },
    issueShares: {
        name: 'Issue Shares',
        selected: false,
        destination: '/issueShares',
        class: 'issue-shares'
    },
    showIssued: {
        name: 'Completed Investments',
        selected: false,
        destination: '/investmentListing',
        class: 'show-issued'
    },
    showPending: {
        name: 'Pending Investments',
        selected: false,
        destination: '/pending',
        class: 'show-pending'
    },
    addShareClass: {
        name: 'Add Share Class',
        selected: false,
        destination: '/addShareClass',
        class: 'add-share-class'
    },
    logout: {
        name: 'Log Out',
        selected: false,
        destination: '/logout'
    }
};

export const investmentReducer = (state=initialState, action) => {
    let newState;
    switch(action.type) {
        case UPDATE_SHARES_SUCCESS:
            newState = {
                ...state,
                investmentData: {
                    issued: [...state.investmentData.issued],
                    pending: [...state.investmentData.pending]
                },
                loading: false,
                editing: null,
                editingIndex: null,
                editingId: null,
                redirect: '/pending'
            };
            newState.investmentData.pending[action.editingIndex] = action.data;
            return newState;
        case DELETE_PENDING_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_PENDING_SUCCESS:
            newState =  {
                ...state,
                investmentData: {
                    issued: [...state.investmentData.issued],
                    pending: [...state.investmentData.pending]
                },
                loading: false,
                editing: null,
                editingIndex: null,
                editingId: null
            };
            newState.investmentData.pending.splice(action.indexToDelete, 1);
            return newState;
        case DELETE_PENDING_ERROR:
            return {
                ...state,
                loading: false,
                erroredId: action.erroredId,
                erroredIndex: action.erroredIndex
            }
        case FIND_INVESTMENT_TO_EDIT_FAILURE:
            return {
                ...state,
                error: action.err
            }
        case FIND_INVESTMENT_TO_EDIT_SUCCESS:
            return {
                ...state,
                editing: {...action.investment},
                editingIndex: action.index,
                editingId: action.id
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                jwt: action.jwt,
                user: {...action.user},
                navData: {...links}
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.err
            }
        case CLEAR_REDIRECT:
            return {
                ...state,
                redirect: false
            }
        case ADD_SHARE_CLASS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_SHARE_CLASS_SUCCESS:
            return {
                ...state,
                companyData: {
                    ...state.companyData,
                    shareClasses: [
                        ...state.companyData.shareClasses,
                        action.data
                    ]
                },
                redirect: '/',
                loading: false
            }
        case ADD_SHARE_CLASS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.err
            }
        case INITIALIZE_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                isReady: false
            }
        case INITIALIZE_DATA_SUCCESS:
            return {
                ...state,
                companyData: {...action.data.companyData},
                investmentData: {...action.data.investmentData},
                isReady: true,
                loading: false
            }
        case INITIALIZE_DATA_ERROR:
            return {
                ...state,
                loading: false,
                isReady: true,
                error: action.err
            }
        case ISSUE_SHARES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.err
            }
        case ISSUE_SHARES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ISSUE_SHARES_SUCCESS:
            newState = {
                ...state,
                investmentData: {
                    issued: [...state.investmentData.issued],
                    pending: [...state.investmentData.pending]
                },
                loading: false,
                redirect: (action.issueType === 'pending' ? '/pending' : '/investmentListing')
            }
            newState.investmentData[action.issueType] = [...state.investmentData[action.issueType], action.data];
            return newState
        case LOGOUT:
            return {...initialState};
        default:
            return state;
    }
};