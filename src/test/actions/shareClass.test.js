import {addShareClass, addShareClassRequest, addShareClassSuccess, addShareClassError, ADD_SHARE_CLASS_REQUEST, ADD_SHARE_CLASS_SUCCESS, ADD_SHARE_CLASS_ERROR} from '../../actions/shareClass';
import {API_BASE_URL} from '../../config';

describe('addShareClassRequest', () => {
    it('should return the action', () => {
        const action = addShareClassRequest();
        expect(action.type).toEqual(ADD_SHARE_CLASS_REQUEST);
    });
});

describe('addShareClassSuccess', () => {
    it('should return the action', () => {
        const data = {myData: 'data'};
        const action = addShareClassSuccess(data);
        expect(action.type).toEqual(ADD_SHARE_CLASS_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('addShareClassError', () => {
    it('should return the action', () => {
        const err = 'my error';
        const action = addShareClassError(err);
        expect(action.type).toEqual(ADD_SHARE_CLASS_ERROR);
        expect(action.err).toEqual(err);
    });
});

describe('addShareClass', () => {
    it('should dispatch addShareClassRequest and addShareClassSuccess', () => {
        const expectedApiUrl = `${API_BASE_URL}/company/shareClass`;
        const expectedHeaders = {"body": "{\"mock\":true}", "headers": {"map": {"authorization": "Bearer null", "content-type": "application/json"}}, "method": "post"};
        const mockData = { mock: true };

        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json() {
                    return mockData;
                }
            })
        });

        const dispatch = jest.fn();
        return addShareClass(mockData)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(expectedApiUrl, expectedHeaders);
            expect(dispatch).toHaveBeenCalledWith(addShareClassRequest());
            expect(dispatch).toHaveBeenCalledWith(addShareClassSuccess(mockData));
        })
    });
});