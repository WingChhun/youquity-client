import getIssuedFields from './getIssuedFields';
import getPendingFields from './getPendingFields';

export default function formatSharesRequest(data) {
    let differentFields;

    if (!data.certificateNumber) {
        differentFields = getPendingFields(data);
    } else {
        differentFields = getIssuedFields(data);
    }

    return {
        certificateTitle: data.shareholderName,
        numShares: data.numShares,
        shareClassSlug: data.shareType,
        ...differentFields
    }
}