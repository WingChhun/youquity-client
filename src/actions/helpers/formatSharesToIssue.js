import formatNumber from './formatNumber';
import formatDate from './formatDate';

export default function formatSharesToIssue(data) {
    return(
        {
            certificateNum: data.certificateNumber,
            certificateTitle: data.shareholderName,
            numShares: formatNumber(data.numShares),
            purchaseDate: formatDate(data.dateRequested),
            shareClassSlug: data.shareType,
            issueDate: formatDate(data.issueDate),
        }
    )
}