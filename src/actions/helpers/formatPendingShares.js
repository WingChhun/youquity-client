import formatNumber from './formatNumber';
import formatDate from './formatDate';

export default function formatPendingShares(data) {
    return({
        certificateTitle: data.shareholderName,
        numShares: formatNumber(data.numShares),
        requestDate: formatDate(data.dateRequested),
        shareClassSlug: data.shareType,
        workflow: [
            {
                stepOrder: 1,
                stepSlug: 'subsAgmt',
                stepName: 'Subscription Agreement Received',
                stepComplete: (data.subsAgmt ? true : false),
            },
            {
                stepOrder: 2,
                stepSlug: 'pymtRecd',
                stepName: 'Payment Received',
                stepComplete: (data.pymtRecd? true : false),
            }
        ]
    });
}