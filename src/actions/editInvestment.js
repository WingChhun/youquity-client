import formatPendingForEdit from './helpers/formatPendingForEdit';

export const editInvestment = (id, investments) => dispatch => {
    let investmentToEdit;
    let investmentIndex;
    for(let i=0; i<investments.length; i++) {
        if(investments[i].id === id) {
            investmentToEdit = investments[i];
            investmentIndex = i;
            break;
        }
    }
    if(investmentToEdit) {
        investmentToEdit = formatPendingForEdit(investmentToEdit);
        dispatch(findInvestmentToEditSuccess(investmentToEdit, investmentIndex, id));
    } else {
        dispatch(findInvestmentToEditFailure(id));
    }
}

export const FIND_INVESTMENT_TO_EDIT_SUCCESS = 'FIND_INVESTMENT_TO_EDIT_SUCCESS';
export const findInvestmentToEditSuccess = (investment, index, id) => ({
    type: FIND_INVESTMENT_TO_EDIT_SUCCESS,
    investment,
    index
});

export const FIND_INVESTMENT_TO_EDIT_FAILURE = 'FIND_INVESTMENT_TO_EDIT_FAILURE';
export const findInvestmentToEditFailure = (id) => ({
    type: FIND_INVESTMENT_TO_EDIT_FAILURE,
    err: `Investment with id ${id} was not found.`
});