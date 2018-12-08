import {issueShares, UPDATE_SHARES_SUCCESS, updateSharesSuccess, ISSUE_SHARES_REQUEST, issueSharesRequest, ISSUE_SHARES_ERROR, issueSharesError, ISSUE_SHARES_SUCCESS, issueSharesSuccess} from '../../actions/issueShares';

import {API_BASE_URL} from '../../config';

describe('updateSharesSuccess', () => {
    it('should return the action', () => {
        const data = {myData: 'data'};
        const editingIndex = 7;
        const action = updateSharesSuccess(data, editingIndex);
        expect(action.type).toEqual(UPDATE_SHARES_SUCCESS);
        expect(action.data).toEqual(data);
        expect(action.editingIndex).toEqual(editingIndex);
    });
});

describe('issueSharesSuccess', () => {
    it('should return the action', () => {
        const issueType = 'random';
        const data = {myData: 'data'};
        const action = issueSharesSuccess(data,issueType);
        expect(action.type).toEqual(ISSUE_SHARES_SUCCESS);
        expect(action.data).toEqual(data);
        expect(action.issueType).toEqual(issueType);
    });
});

describe('issueSharesRequest', () => {
    it('should return the action', () => {
        const action = issueSharesRequest();
        expect(action.type).toEqual(ISSUE_SHARES_REQUEST);
    });
});

describe('issueSharesError', () => {
    it('should return the action', () => {
        const err = 'some error.';
        const action = issueSharesError(err);
        expect(action.type).toEqual(ISSUE_SHARES_ERROR);
        expect(action.err).toEqual(err);
    });
});

describe('issueShares', () => {
    it('should dispatch issueSharesRequest and issueSharesSuccess when receiving a pending request', () => {
        const requestType = 'pending'
        const expectedApiUrl = `${API_BASE_URL}/company/shares/${requestType}`;
        const expectedHeaders = {"body": "{\"mock\":true,\"numShares\":100}", "headers": {"map": {"authorization": "Bearer null", "content-type": "application/json"}}, "method": "post"};
        const mockRequest = { mock: true, numShares: 100 };
        const mockWithId = {id: 5, ...mockRequest};

        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json() {
                    return mockWithId;
                }
            })
        });

        const dispatch = jest.fn();
        return issueShares(mockRequest, 1, null, null)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(expectedApiUrl, expectedHeaders);
            expect(dispatch).toHaveBeenCalledWith(issueSharesRequest());
            expect(dispatch).toHaveBeenCalledWith(issueSharesSuccess(mockWithId, requestType));
        });
    });
});