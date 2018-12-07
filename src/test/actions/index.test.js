import {CLEAR_REDIRECT, clearRedirect} from '../../actions';

describe('clearRedirect', () => {
    it('should return the action', () => {
        const action = clearRedirect();
        expect(action.type).toEqual(CLEAR_REDIRECT);
    });
});