import {INITIALIZE_DATA_ERROR, initializeDataError, INITIALIZE_DATA_REQUEST, initializeDataRequest, INITIALIZE_DATA_SUCCESS, initializeDataSuccess, initializeData} from '../../actions/initialize';

import { API_BASE_URL } from '../../config';

describe('initializeDataError', () => {
    it('should return the action', () => {
        const err = 'some error string';
        const action = initializeDataError(err);
        expect(action.type).toEqual(INITIALIZE_DATA_ERROR);
        expect(action.err).toEqual(err);
    });
});

describe('initializeDataRequest', () => {
    it('should return the action', () => {
        const action = initializeDataRequest();
        expect(action.type).toEqual(INITIALIZE_DATA_REQUEST);
    });
});

describe('initializeDataSuccess', () => {
    it('should return the action', () => {
        const data = {data:'my data'};
        const action = initializeDataSuccess(data);
        expect(action.type).toEqual(INITIALIZE_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('initializeData', () => {
    it('should dispatch initializeDataRequest and initializeDataSuccess', () => {
        const expectedApiUrl = `${API_BASE_URL}/company`;
        const expectedHeaders = {"headers": {"map": {"authorization": "Bearer null", "content-type": "application/json"}}, "method": "get"};
        const mockCompany = {mock: true};

        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json() {
                    return mockCompany;
                }
            })
        });

        const dispatch = jest.fn();

        return initializeData()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(expectedApiUrl, expectedHeaders);
            expect(dispatch).toHaveBeenCalledWith(initializeDataRequest());
            expect(dispatch).toHaveBeenCalledWith(initializeDataSuccess(mockCompany))
        })
    });
});