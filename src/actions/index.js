import formatShareClass from './helpers/formatShareClass';
import formatPendingShares from './helpers/formatPendingShares';
import formatSharesToIssue from './helpers/formatSharesToIssue';

export const ADD_SHARE_CLASS = 'ADD_SHARE_CLASS';
export const addShareClass = data => {
    data = formatShareClass(data);
    return({
        type: ADD_SHARE_CLASS,
        data
    });
};

export const CREATE_PENDING_SHARES = 'CREATE_PENDING_SHARES';
export const ISSUE_SHARES = 'ISSUE_SHARES';
export const issueShares = data => {
    if(!data.certificateNumber) {
        data = formatPendingShares(data);
        return({
            type: CREATE_PENDING_SHARES,
            data
        });
    }
    data = formatSharesToIssue(data);
    return({
        type: ISSUE_SHARES,
        data
    });
}