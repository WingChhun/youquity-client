import formatCurrency from './formatCurrency';
import formatDate from './formatDate';
import formatNumber from './formatNumber';
import prettifyBoolean from './prettifyBoolean';

// takes the company object returned from
// the api and does some formatting to make
// it a little prettier
export default function formatApiCompany(company) {
    if(company.mock) {
        return company;
    }
    const prettierCompany = {...company};

    prettierCompany.companyData.summaryData.forEach((dataObj) => {
        dataObj.data = formatNumber(dataObj.data);
    });

    prettierCompany.companyData.shareClasses.forEach((shareClass) => {
        shareClass.classData.forEach((dataObj) => {
            if(dataObj.dataSlug === 'currentPrice') {
                dataObj.data = formatCurrency(dataObj.data);
            } else if(dataObj.dataSlug === 'currentlyOffered' || dataObj.dataSlug === 'requestsPending') {
                dataObj.data = prettifyBoolean(dataObj.data);
            } else {
                dataObj.data = formatNumber(dataObj.data);
            }
        })
    });

    prettierCompany.investmentData.issued.forEach((investment) => {
        investment.numShares = formatNumber(investment.numShares);
        investment.pricePerShare = formatCurrency(investment.pricePerShare);
        investment.purchaseDate = formatDate(investment.purchaseDate);
        investment.issueDate = formatDate(investment.issueDate);
    });

    prettierCompany.investmentData.pending.forEach((investment) => {
        investment.numShares = formatNumber(investment.numShares);
        investment.requestDate = formatDate(investment.requestDate);
    });

    return prettierCompany;
}