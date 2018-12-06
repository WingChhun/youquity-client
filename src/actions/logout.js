export const logoutRequest = () => dispatch => {
    localStorage.clear();
    dispatch(logout());
}

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
    type: LOGOUT
});