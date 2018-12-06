import {API_BASE_URL} from '../config';
import {initializeData} from './initialize';
import jwtDecode from 'jwt-decode';

export const login = (data) => dispatch => {
    dispatch(loginRequest());
    fetch(`${API_BASE_URL}/auth/login`, {
        method: 'post',
        headers: new Headers({
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
            const user = jwtDecode(data.jwt).user;
            localStorage.setItem('jwt', data.jwt);
            localStorage.setItem('user', user);
            dispatch(initializeData());
            dispatch(loginSuccess(data.jwt, user));
        })
        .catch((err) => {
            dispatch(loginError(err));
        });
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (jwt, user) => ({
    type: LOGIN_SUCCESS,
    jwt,
    user
});

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = (err) => ({
    type: LOGIN_ERROR,
    err
});

