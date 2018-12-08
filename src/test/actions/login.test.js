import  {login, LOGIN_REQUEST, loginRequest, LOGIN_SUCCESS, loginSuccess, LOGIN_ERROR, loginError} from '../../actions/login';

import {initializeData} from '../../actions/initialize';

import {API_BASE_URL} from '../../config';

import jwtDecode from 'jwt-decode';

const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMwOTgzYzMzMWJkMGU1YzU4YTIyODExIiwibmFtZSI6IkFtYW5kYSBSZWlsbHkiLCJlbWFpbCI6InRlc3RAdGVzdC50ZXN0In0sImlhdCI6MTU0NDEyNzQ0OCwiZXhwIjoxNTQ0NzMyMjQ4LCJzdWIiOiJ0ZXN0QHRlc3QudGVzdCJ9.IrRuyU1YSHS_dchGfa3DGxXvzadijv6mIc5n1_NB3JM';

const user = jwtDecode(jwt);

describe('loginRequest', () => {
    it('should return the action', () => {
        const action = loginRequest();
        expect(action.type).toEqual(LOGIN_REQUEST);
    });
});

describe('loginSuccess', () => {
    it('should return the action', () => {
        const action = loginSuccess(jwt, user);
        expect(action.type).toEqual(LOGIN_SUCCESS);
        expect(action.jwt).toEqual(jwt);
        expect(action.user).toEqual(user);
    });
});

describe('loginError', () => {
    it('should return the action', () => {
        const err = 'my error string';
        const action = loginError(err);
        expect(action.type).toEqual(LOGIN_ERROR);
        expect(action.err).toEqual(err);
    });
});

describe('login', () => {
    describe('should dispatch loginRequest, initializeData, and loginSuccess and set local storage for jwt and user', () => {
        const mockLoginData = {email: 'test@test.test', password: 'testing123'};
        const expectedApiUrl = `${API_BASE_URL}/auth/login`;
        const expectedHeaders = {"body": "{\"email\":\"test@test.test\",\"password\":\"testing123\"}", "headers": {"map": {"content-type": "application/json"}}, "method": "post"};

        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json() {
                    return {jwt: jwt};
                }
            })
        });

        const dispatch = jest.fn();
        return login(mockLoginData)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(expectedApiUrl, expectedHeaders);
            expect(dispatch).toHaveBeenCalledWith(loginRequest());
            expect(dispatch).toHaveBeenCalledWith(initializeData());
            expect(dispatch).toHaveBeenCalledWith(loginSuccess(jwt, user));
            expect(localStorage.getItem('jwt')).toEqual(jwt);
            expect(localStorage.getItem('user')).toEqual(user);
        })
    });
});