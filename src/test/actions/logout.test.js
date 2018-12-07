import {logoutRequest, logout, LOGOUT} from '../../actions/logout';

describe('logout', () => {
    it('should return the action', () => {
        const action = logout();
        expect(action.type).toEqual(LOGOUT);
    });
});

describe('logoutRequest', () => {
    it('should clear local storage and dispatch logout', () => {
        const dispatch = jest.fn();
        logoutRequest()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(logout());
        expect(localStorage.getItem('jwt')).toEqual(null);
        expect(localStorage.getItem('user')).toEqual(null);
    });
});