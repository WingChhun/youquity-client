import {initialState, investmentReducer, links} from '../../reducers';

import {clearRedirect} from '../../actions';
import { initializeDataRequest, initializeDataError, initializeDataSuccess } from '../../actions/initialize';
import { addShareClassRequest, addShareClassSuccess, addShareClassError} from '../../actions/shareClass';
import { issueSharesError, issueSharesRequest, issueSharesSuccess, updateSharesSuccess } from '../../actions/issueShares';
import { loginRequest, loginSuccess, loginError } from '../../actions/login';
import { logout } from '../../actions/logout';
import { findInvestmentToEditFailure, findInvestmentToEditSuccess } from '../../actions/editInvestment';
import { deletePendingError, deletePendingRequest, deletePendingSuccess } from '../../actions/deletePending';

describe('investmentReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = investmentReducer(undefined, { type: '__UNKNOWN'});
        expect(state).toEqual(initialState);
    });
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = investmentReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });
    describe('clearRedirect', () => {
        it('should set state.redirect to false', () => {
            const currentState = {redirect: '/some/redirect/link'};
            const state = investmentReducer(currentState, clearRedirect());
            expect(state.redirect).toEqual(false);
        });
    });
    describe('initializeDataRequest', () => {
        it('should set loading to true and isReady to false', () => {
            const currentState = {loading: false, isReady: true};
            const state = investmentReducer(currentState, initializeDataRequest());
            expect(state.loading).toEqual(true);
            expect(state.isReady).toEqual(false);
        });
    });
    describe('initializeDataError', () => {
        it('should set the loading, isReady, and error parameters', () => {
            const currentState = {loading: true, isReady: false, error: false};
            const errorMsg = 'This is an error.';
            const state = investmentReducer(currentState, initializeDataError(errorMsg));
            expect(state.loading).toEqual(false);
            expect(state.isReady).toEqual(true);
            expect(state.error).toEqual(errorMsg);
        });
    });
    describe('initializeDataSuccess', () => {
        it('should replace company data and investment data and set isReady, and loading', () => {
            const currentState = {
                companyData: [],
                investmentData:{issued:[], pending:[]},
                isReady: false,
                loading: true
            };
            const data = {
                companyData: {
                    param1: 'test',
                    param2: 'foo'
                },
                investmentData: {
                    someParam: 'bar',
                    anotherParam: 'baz'
                }
            };
            const state = investmentReducer(currentState, initializeDataSuccess(data));
            expect(state.companyData).toEqual(data.companyData);
            expect(state.investmentData).toEqual(data.investmentData);
            expect(state.isReady).toEqual(true);
            expect(state.loading).toEqual(false);
            
        });
    });
    describe('addShareClassRequest', () => {
        it('should set loading to true', () => {
            const currentState = {loading: false};
            const state = investmentReducer(currentState, addShareClassRequest());
            expect(state.loading).toEqual(true);
        });
    });
    describe('addShareClassSuccess', () => {
        it('should push a share class to the shareClassesArray, set loading to false, and set redirect', () => {
            const currentState = {
                companyData: {
                    shareClasses: ['some value', 'some other value']
                },
                loading: true,
                redirect: false
            };
            const data = 'my new data';
            const state = investmentReducer(currentState, addShareClassSuccess(data));
            expect(state.companyData.shareClasses).toEqual([...currentState.companyData.shareClasses, data]);
            expect(state.loading).toEqual(false);
            expect(state.redirect).toEqual('/');
            
        });
    });
    describe('addShareClassError', () => {
        it('should set loading to false and set the error', () => {
            const currentState = {loading: true, error: false};
            const error = 'Some error string.';
            const state = investmentReducer(currentState, addShareClassError(error));
            expect(state.loading).toEqual(false);
            expect(state.error).toEqual(error);
        });
    });
    describe('issueSharesError', () => {
        it('should set loading to false and set the error', () => {
            const currentState = {loading: true, error: false};
            const errorString = 'This is my error.';
            const state = investmentReducer(currentState, issueSharesError(errorString));
            expect(state.loading).toEqual(false);
            expect(state.error).toEqual(errorString);
        });
    });
    describe('issueSharesRequest', () => {
        it('should set loading to true', () => {
            const currentState = {loading: false};
            const state = investmentReducer(currentState, issueSharesRequest());
            expect(state.loading).toEqual(true);
        });
    });
    describe('issueSharesSuccess', () => {
        it('should add a pending certificate, set loading to false, and set the correct redirect', () => {
            const currentState = {investmentData: {issued:['item 1', 'item2', 'item 3'], pending: ['item 1', 'item2', 'item3'], loading: true, redirect: false}};
            const newItem = 'some item';
            const state = investmentReducer(currentState, issueSharesSuccess(newItem, 'pending'));
            expect(state.investmentData.issued).toEqual(currentState.investmentData.issued);
            expect(state.investmentData.pending).toEqual([...currentState.investmentData.pending, newItem]);
            expect(state.loading).toEqual(false);
            expect(state.redirect).toEqual('/pending');
        });
        it('should add an issued certificate, set loading to false, and set the correct redirect', () => {
            const currentState = { investmentData: { issued: ['item 1', 'item2', 'item 3'], pending: ['item 1', 'item2', 'item3'] }, loading: true, redirect: false };
            const newItem = 'some item';
            const state = investmentReducer(currentState, issueSharesSuccess(newItem, 'issued'));
            expect(state.investmentData.pending).toEqual(currentState.investmentData.pending);
            expect(state.investmentData.issued).toEqual([...currentState.investmentData.issued, newItem]);
            expect(state.loading).toEqual(false);
            expect(state.redirect).toEqual('/investmentListing');
        });
    });
    describe('updateSharesSuccess', () => {
        it('should update a pending request, clear flags for loading, editing, editingIndex, and editingId, and set the proper redirect', () => {
            const currentState = { investmentData: { issued: ['item 1', 'item2', 'item 3'], pending: ['item 1', 'item2', 'item3'] }, loading: true, redirect: false };
            const newItem = 'some item';
            const index = 2;
            const state = investmentReducer(currentState, updateSharesSuccess(newItem, index));
            expect(state.loading).toEqual(false);
            expect(state.editing).toEqual(null);
            expect(state.editingIndex).toEqual(null);
            expect(state.editingId).toEqual(null);
            expect(state.redirect).toEqual('/pending');
            expect(state.investmentData.issued).toEqual(currentState.investmentData.issued);
            expect(state.investmentData.pending.length).toEqual(3);
            expect(state.investmentData.pending[0]).toEqual(currentState.investmentData.pending[0]);
            expect(state.investmentData.pending[1]).toEqual(currentState.investmentData.pending[1]);
            expect(state.investmentData.pending[2]).toEqual(newItem);
        });
    });
    describe('loginRequest', () => {
        it('should set loading to true', () => {
            const currentState = {loading: false};
            const state = investmentReducer(currentState, loginRequest());
            expect(state.loading).toEqual(true);
        });
    });
    describe('loginSuccess', () => {
        it('should set loading false, set jwt, set user, and set nav links', () => {
            const currentState = {loading: true, jwt: null, user: null, navData: {}};
            const jwt = 'somestringlike-thisreallyxlong';
            const user = {
                userProp: 'property',
                propUser: 'user'
            };
            const state = investmentReducer(currentState, loginSuccess(jwt, user));
            expect(state.loading).toEqual(false);
            expect(state.jwt).toEqual(jwt);
            expect(state.user).toEqual(user);
            expect(state.navData).toEqual(links);
        });
    });
    describe('loginError', () => {
        it('should set loading false and set the error', () => {
            const currentState = {loading: true, error: false};
            const error = 'this is my fight song';
            const state = investmentReducer(currentState, loginError(error));
            expect(state.loading).toEqual(false);
            expect(state.error).toEqual(error);
        });
    });
    describe('logout', () => {
        it('should reset state to initial state', () => {
            const currentState = {prop: 'definitely not', prop2: 'the initial state'};
            const state = investmentReducer(currentState, logout());
            expect(state).toEqual(initialState);
        });
    });
    describe('findInvestmentToEditFailure', () => {
        it('should set the error', () => {
            const currentState = {error: false};
            const id = 'afesfsdwwww';
            const errorString = `Investment with id ${id} was not found.`;
            const state = investmentReducer(currentState, findInvestmentToEditFailure(id));
            expect(state.error).toEqual(errorString);
        });
    });
    describe('findInvestmentToEditSuccess', () => {
        it('should set editing, editingIndex, and editingId', () => {
            const currentState = {editing: null, editingIndex: null, editingId: null};
            const editing = {iam: 'a little', tea: 'pot'};
            const editingIndex = 42;
            const editingId = 'theMeaningOfLife';
            const state = investmentReducer(currentState, findInvestmentToEditSuccess(editing, editingIndex, editingId));
            expect(state.editing).toEqual(editing);
            expect(state.editingIndex).toEqual(editingIndex);
            expect(state.editingId).toEqual(editingId);
        });
    });
    describe('deletePendingError', () => {
        it('should set loading false, and set erroredId and erroredIndex', () => {
            const currentState = {loading: true, erroredId: null, erroredIndex: null};
            const erroredId = 'thequickbrown';
            const erroredIndex = 98;
            const state = investmentReducer(currentState, deletePendingError(erroredId, erroredIndex));
            expect(state.loading).toEqual(false);
            expect(state.erroredId).toEqual(erroredId);
            expect(state.erroredIndex).toEqual(erroredIndex);
        });
    });
    describe('deletePendingRequest', () => {
        it('should set loading to true', () => {
            const currentState = {loading: false}
            const state = investmentReducer(currentState, deletePendingRequest());
            expect(state.loading).toEqual(true);
        });
    });
    describe('deletePendingSuccess', () => {
        it('should remove the pending certificate at the specified index, and set loading false and editing, editingIndex, and editingId to null', () => {
            const currentState = {investmentData: {issued:['the hitchhiker\'s guide to the galaxy', 'fahrenheit 451'], pending: ['one flew over the cukoo\'s nest', 'schindler\'s list', 'the breakfast club']}, loading: true, editing: 'something', editingIndex: 99, editingId: '99luftbaloons'};
            const indexToDelete = 1;
            const state = investmentReducer(currentState, deletePendingSuccess(indexToDelete));
            expect(state.loading).toEqual(false);
            expect(state.editing).toEqual(null);
            expect(state.editingIndex).toEqual(null);
            expect(state.editingId).toEqual(null);
            expect(state.investmentData.issued).toEqual(currentState.investmentData.issued);
            expect(state.investmentData.pending).toEqual([currentState.investmentData.pending[0], currentState.investmentData.pending[2]]);
            
        });
    });
});