import getIssuedFields from './getIssuedFields';
import getPendingFields from './getPendingFields';

export default function formatSharesRequest(data, id=false, shareClasses=null) {
    if(data.mock) {
        return {certificateNum: data.certificateNumber, ...data};
    }
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

    return returnVals;
}