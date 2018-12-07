import {editInvestment, FIND_INVESTMENT_TO_EDIT_SUCCESS, findInvestmentToEditSuccess, FIND_INVESTMENT_TO_EDIT_FAILURE, findInvestmentToEditFailure} from '../../actions/editInvestment';

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
            mock: true,
            id: 'lorem', 
        };
        const index = 3;
        const investments = [{ id: 'the' }, { id: 'quick' }, { id: 'brown' }, investmentToFind, { id: 'fox' }];

        const dispatch = jest.fn();

        editInvestment(investmentToFind.id, investments)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(findInvestmentToEditSuccess(investmentToFind, index, investmentToFind.id));
    });

    

});