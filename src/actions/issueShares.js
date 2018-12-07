import formatSharesRequest from './helpers/formatSharesRequest';
import formatDate from './helpers/formatDate';
import formatNumber from './helpers/formatNumber';
import formatCurrency from './helpers/formatCurrency';
import {API_BASE_URL} from '../config';

import {deletePending} from './deletePending';

const jwt = localStorage.getItem('jwt');

export const issueShares = (data, editingIndex, id, shareClasses) => dispatch => {
    dispatch(issueSharesRequest());
    data = formatSharesRequest(data, null, shareClasses);    
    if(id) {
        if(data.certificateNum) {
            // pending request has been finalized,
            // need to delete from pending 
            console.log('has editing index and certificate num so delete pending action should be called');
            dispatch(deletePending(id, editingIndex));
        }
    }
    const requestType = (data.certificateNum ? 'issued' : 'pending');
    let apiUrl = `${API_BASE_URL}/company/shares/${requestType}`;
    let apiMethod = 'post';
    if(id && !data.certificateNum) {
        apiUrl += `/${id}`;
        apiMethod = 'put';
    }

    return fetch(apiUrl, {
        method: apiMethod,
        headers: new Headers({
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    })
        .then((res) => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            if(requestType === 'pending') {
                data.requestDate = formatDate(data.requestDate);

            } else if(requestType === 'issued'){
                data.issueDate = formatDate(data.issueDate);
                data.pricePerShare = formatCurrency(data.pricePerShare);
                data.purchaseDate = formatDate(data.purchaseDate);
            } else {
                
            }
            
            data.numShares = formatNumber(data.numShares);
            if(id && requestType === 'pending') {
                dispatch(updateSharesSuccess(data, editingIndex));
            } else {
                dispatch(issueSharesSuccess(data, requestType));
            }
        })
        .catch((err) => {
            dispatch(issueSharesError(err));
        });
}

export const UPDATE_SHARES_SUCCESS = 'UPDATE_SHARES_SUCCESS';
export const updateSharesSuccess = (data, editingIndex) => ({
    type: UPDATE_SHARES_SUCCESS,
    data,
    editingIndex
});

export const ISSUE_SHARES_REQUEST = 'ISSUE_SHARES_REQUEST';
export const issueSharesRequest = () => ({
    type: ISSUE_SHARES_REQUEST
});

export const ISSUE_SHARES_SUCCESS = 'ISSUE_SHARES_SUCCESS';
export const issueSharesSuccess = (data, issueType) => ({
    type: ISSUE_SHARES_SUCCESS,
    issueType,
    data
});

export const ISSUE_SHARES_ERROR = 'ISSUE_SHARES_ERROR';
export const issueSharesError = (err) => ({
    type: ISSUE_SHARES_ERROR,
    err
});
