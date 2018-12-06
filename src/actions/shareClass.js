import createSlug from './helpers/createSlug';
import { API_BASE_URL } from '../config';
import { jwt } from './helpers/jwt';

import formatShareClass from './helpers/formatShareClass';

export const addShareClass = (data) => dispatch => {
    dispatch(addShareClassRequest())
;    data.classSlug = createSlug(data.className);
    if(!data.currentlyOffered) {
        data.currentlyOffered = false;
    };
    data.authedShares = data.authorizedShares;
    delete data.authorizedShares;
    data.currentPrice = data.sharePrice;
    delete data.sharePrice;

    fetch(`${API_BASE_URL}/company/shareClass`, {
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
        data = formatShareClass(data);
        dispatch(addShareClassSuccess(data));
    })
    .catch((err) => {
        dispatch(addShareClassError(err));
    });
}

export const ADD_SHARE_CLASS_REQUEST = 'ADD_SHARE_CLASS_REQUEST';
export const addShareClassRequest = () => ({
    type: ADD_SHARE_CLASS_REQUEST
});

export const ADD_SHARE_CLASS_SUCCESS = 'ADD_SHARE_CLASS_SUCCESS';
export const addShareClassSuccess = data => ({
    type: ADD_SHARE_CLASS_SUCCESS,
    data
});

export const ADD_SHARE_CLASS_ERROR = 'ADD_SHARE_CLASS_ERROR';
export const addShareClassError = err => ({
    type: ADD_SHARE_CLASS_ERROR,
    err
});