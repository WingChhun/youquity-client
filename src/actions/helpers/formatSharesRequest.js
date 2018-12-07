import getIssuedFields from './getIssuedFields';
import getPendingFields from './getPendingFields';

export default function formatSharesRequest(data, id=false, shareClasses=null) {
    let differentFields;

    if (!data.certificateNumber) {
        differentFields = getPendingFields(data, id);
    } else {
        differentFields = getIssuedFields(data, shareClasses);
    }

    return {
        certificateTitle: data.shareholderName,
        numShares: data.numShares,
        shareClassSlug: data.shareType,
        ...differentFields
    }
}