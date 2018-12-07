import getIssuedFields from './getIssuedFields';
import getPendingFields from './getPendingFields';

export default function formatSharesRequest(data, id=false, shareClasses=null) {
    if(data.mock) {
        console.log('detected data.mock');
        return {certificateNum: data.certificateNumber, ...data};
    }
    console.log('inside format shares request');
    console.log(id)
    let differentFields;

    if (!data.certificateNumber) {
        differentFields = getPendingFields(data, id);
    } else {
        differentFields = getIssuedFields(data, shareClasses);
    }

    const returnVals =  {
        certificateTitle: data.shareholderName,
        numShares: data.numShares,
        shareClassSlug: data.shareType,
        ...differentFields
    }
    console.log('return values', returnVals);

    return returnVals;
}