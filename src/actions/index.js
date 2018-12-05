import {API_BASE_URL} from '../config';

import formatApiCompany from './helpers/formatApiCompany';
import formatShareClass from './helpers/formatShareClass';
import formatPendingShares from './helpers/formatPendingShares';
import formatSharesToIssue from './helpers/formatSharesToIssue';

export const ADD_SHARE_CLASS = 'ADD_SHARE_CLASS';
export const addShareClass = data => {
    console.log(data);
    data = formatShareClass(data);
    console.log(data);
    return({
        type: ADD_SHARE_CLASS,
        data
    });
};

export const CREATE_PENDING_SHARES = 'CREATE_PENDING_SHARES';
export const ISSUE_SHARES = 'ISSUE_SHARES';
export const issueShares = data => {
    if(!data.certificateNumber) {
        data = formatPendingShares(data);
        return({
            type: CREATE_PENDING_SHARES,
            data
        });
    }
    data = formatSharesToIssue(data);
    return({
        type: ISSUE_SHARES,
        data
    });
}

// WIRING UP API
export const INITIALIZE_DATA_REQUEST = 'INITIALIZE_DATA_REQUEST';
export const initializeDataRequest = () => ({
    type: INITIALIZE_DATA_REQUEST
});

export const INITIALIZE_DATA_SUCCESS = 'INITIALIZE_DATA_SUCCESS';
export const initializeDataSuccess = data => ({
    type: INITIALIZE_DATA_SUCCESS,
        data
});

export const INITIALIZE_DATA_ERROR = 'INITIALIZE_DATA_ERROR';
export const initializeDataError = err => ({
    type: INITIALIZE_DATA_ERROR,
    err
});

// hardcode a jwt to get everything working first
const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMwODNhODgzODllMGYzYzg4NDZlZmQ0IiwibmFtZSI6IkFtYW5kYSBSZWlsbHkiLCJlbWFpbCI6InRlc3RAdGVzdC50ZXN0In0sImlhdCI6MTU0NDA0MzIzNiwiZXhwIjoxNTQ0NjQ4MDM2LCJzdWIiOiJ0ZXN0QHRlc3QudGVzdCJ9.q8eqSS2gv_o47ZAThqhgA4-zMhdtX1i98I3Yrh1g5-0';

export const initializeData = () => dispatch => {
    fetch(`${API_BASE_URL}/company`, {
        method: 'get',
        headers: new Headers({
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        })
    })
        .then((res) => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            data = formatApiCompany(data);
            dispatch(initializeDataSuccess(data));
        })
        .catch((err) => {
            dispatch(initializeDataError(err));
        });
}