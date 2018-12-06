import getCurrentSharePrice from './getCurrentSharePrice';

export default function getIssuedFields(data) {
    return(
        {
            certificateNum: data.certificateNumber,
            pricePerShare: getCurrentSharePrice(data.shareType),
            purchaseDate: data.dateRequested,
            issueDate: data.issueDate
        }
    );
}