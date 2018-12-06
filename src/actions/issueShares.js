import formatSharesRequest from './helpers/formatSharesRequest';
import formatDate from './helpers/formatDate';
import formatNumber from './helpers/formatNumber';
import formatCurrency from './helpers/formatCurrency';
import {API_BASE_URL} from '../config';
import {jwt} from './helpers/jwt';

export const issueShares = data => dispatch => {
    dispatch(issueSharesRequest());
    data = formatSharesRequest(data);    
    const requestType = (data.certificateNum ? 'issued' : 'pending');
    const apiUrl = `${API_BASE_URL}/company/shares/${requestType}`;

    fetch(apiUrl, {
        method: 'post',
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

            } else {
                data.issueDate = formatDate(data.issueDate);
                data.pricePerShare = formatCurrency(data.pricePerShare);
                data.purchaseDate = formatDate(data.purchaseDate);
            }
            
            data.numShares = formatNumber(data.numShares);
            
            dispatch(issueSharesSuccess(data, requestType));
        })
        .catch((err) => {
            dispatch(issueSharesError(err));
        });
}

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
