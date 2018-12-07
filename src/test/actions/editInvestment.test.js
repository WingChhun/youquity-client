import {editInvestment, FIND_INVESTMENT_TO_EDIT_SUCCESS, findInvestmentToEditSuccess, FIND_INVESTMENT_TO_EDIT_FAILURE, findInvestmentToEditFailure} from '../../actions/editInvestment';

import formatPendingForEdit from '../../actions/helpers/formatPendingForEdit';

describe('findInvestmentToEditSuccess', () => {
    it('should return the action', () => {
        const investment = {objParam: 'my param'};
        const index = 7;
        const id = 'lorem';
        const action = findInvestmentToEditSuccess(investment, index, id);
        expect(action.type).toEqual(FIND_INVESTMENT_TO_EDIT_SUCCESS);
        expect(action.investment).toEqual(investment);
        expect(action.id).toEqual(id);
    });
});

describe('findInvestmentToEditFailure', () => {
    it('should return the action', () => {
        const id = 4;
        const action = findInvestmentToEditFailure(id);
        expect(action.type).toEqual(FIND_INVESTMENT_TO_EDIT_FAILURE);
        expect(action.err).toEqual(`Investment with id ${id} was not found.`);
    });
});

describe('editInvestment', () => {
    it('should dispatch findInvestmentEditSuccess', () => {
        const investmentToFind = {
            id: 'lorem', shareClassSlug: 'aSlug', certificateTitle: 'John Doe', numShares: '1,000,000',
            requestDate: '10/20/84', workflow: [{ stepComplete: true }, { stepComplete: false }]
        };
        const index = 3;
        const investments = [{ id: 'the' }, { id: 'quick' }, { id: 'brown' }, investmentToFind, { id: 'fox' }];

        const dispatch = jest.fn();

        editInvestment(investmentToFind.id, investments)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(findInvestmentToEditSuccess(formatPendingForEdit(investmentToFind), index, investmentToFind.id));
    });

    

});