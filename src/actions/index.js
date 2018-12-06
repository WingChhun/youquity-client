import formatPendingShares from './helpers/formatPendingShares';
import formatSharesToIssue from './helpers/formatSharesToIssue';

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

export const CLEAR_REDIRECT = 'CLEAR_REDIRECT';
export const clearRedirect = () => ({
    type: CLEAR_REDIRECT
});