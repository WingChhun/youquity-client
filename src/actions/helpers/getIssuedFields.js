import getCurrentSharePrice from './getCurrentSharePrice';

export default function getIssuedFields(data, shareClasses) {
    return(
        {
            certificateNum: data.certificateNumber,
            pricePerShare: getCurrentSharePrice(data.shareType, shareClasses),
            purchaseDate: data.dateRequested,
            issueDate: data.issueDate
        }
    );
}