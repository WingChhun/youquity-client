import { API_BASE_URL } from '../config';
import {jwt} from './helpers/jwt';

import formatApiCompany from './helpers/formatApiCompany';

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

export const initializeData = () => dispatch => {
    fetch(`${API_BASE_URL}/company`, {
        method: 'get',
        headers: new Headers({
            'Authorization': `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        })
    })
        .then((res) => {
            if (!res.ok) {
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