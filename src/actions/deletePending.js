import {API_BASE_URL} from '../config';

const jwt = localStorage.getItem('jwt');

export const deletePending = (idToDelete, indexToDelete) => dispatch => {
    dispatch(deletePendingRequest());
    const apiUrl = `${API_BASE_URL}/company/shares/pending/${idToDelete}`;

    fetch(apiUrl, {
        method: 'delete',
        headers: new Headers({
            'Authorization': `Bearer ${jwt}`,
        })
    })
        .then((res) => {
            console.log('got response from delete request');
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            dispatch(deletePendingSuccess(indexToDelete));
        })
        .catch((err) => {
            dispatch(deletePendingError(idToDelete, indexToDelete));
        });
}

export const DELETE_PENDING_REQUEST = 'DELETE_PENDING_REQUEST';
export const deletePendingRequest = () => ({
    type: DELETE_PENDING_REQUEST
});

export const DELETE_PENDING_SUCCESS = 'DELETE_PENDING_SUCCESS';
export const deletePendingSuccess = (indexToDelete) => ({
    type: DELETE_PENDING_SUCCESS,
    indexToDelete
});

export const DELETE_PENDING_ERROR = 'DELETE_PENDING_ERROR';
export const deletePendingError = (erroredId, erroredIndex) => ({
    type: DELETE_PENDING_ERROR,
    erroredId,
    erroredIndex
});