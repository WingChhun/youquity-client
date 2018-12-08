import {DELETE_PENDING_REQUEST, deletePendingRequest, DELETE_PENDING_SUCCESS, deletePendingSuccess, DELETE_PENDING_ERROR, deletePendingError, deletePending} from '../../actions/deletePending';

import {API_BASE_URL} from '../../config';

describe('deletePendingRequest', () => {
    it('should return the action', () => {
        const action = deletePendingRequest();
        expect(action.type).toEqual(DELETE_PENDING_REQUEST);
    });
});

describe('deletePendingSuccess', () => {
    it('should return the action', () => {
        const action = deletePendingSuccess(1);
        expect(action.type).toEqual(DELETE_PENDING_SUCCESS);
        expect(action.indexToDelete).toEqual(1);
    });
});

describe('deletePendingError', () => {
    it('should return the action', () => {
        const erroredId = 3;
        const erroredIndex = 5;
        const action = deletePendingError(erroredId, erroredIndex);
        expect(action.type).toEqual(DELETE_PENDING_ERROR);
        expect(action.erroredId).toEqual(erroredId);
        expect(action.erroredIndex).toEqual(erroredIndex);
    });
});

describe('deletePending', () => {
    it('should dispatch fetchBoardRequest and fetchBoardSuccess', () => {
        const idToDelete = 2;
        const indexToDelete = 5;
        const expectedApiUrl = `${API_BASE_URL}/company/shares/pending/${idToDelete}`;
        const expectedHeaders = {"headers": {"map": {"authorization": "Bearer null"}}, "method": "delete"};
        const validServerResponse = {
            message: 'Investment 2 has been deleted.'
        };

        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json() {
                    return validServerResponse;
                }
            })
        });

        const dispatch = jest.fn();

        return deletePending(idToDelete, indexToDelete)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(expectedApiUrl, expectedHeaders);
            expect(dispatch).toHaveBeenCalledWith(deletePendingRequest());
            expect(dispatch).toHaveBeenCalledWith(deletePendingSuccess(indexToDelete));
        })
    });
});