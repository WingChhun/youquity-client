import createSlug from './createSlug';
import formatNumber from './formatNumber';
import prettifyBoolean from './prettifyBoolean';
import formatCurrency from './formatCurrency';

export default function formatShareClass(data) {
    return(
        {
            classSlug: createSlug(data.className),
            className: data.className,
            currentlyOffered: (data.currentlyOffered ? true : false),
            classData: [
                {
                    dataSlug: 'authedShares',
                    dataName: 'Authorized Shares',
                    data: formatNumber(data.authorizedShares),
                    editable: true
                },
                {
                    dataSlug: 'issuedShares',
                    dataName: 'Issued Shares',
                    data: 0,
                    editable: false
                },
                {
                    dataSlug: 'reservedShares',
                    dataName: 'Reserved Shares',
                    data: formatNumber(data.reservedShares),
                    editable: true
                },
                {
                    dataSlug: 'currentlyOffered',
                    dataName: 'Currently Offered',
                    data: prettifyBoolean(data.currentlyOffered),
                    editable: true
                },
                {
                    dataSlug: 'currentPrice',
                    dataName: 'Current Price per Share',
                    data: formatCurrency(data.sharePrice),
                    editable: true
                },
                {
                    dataSlug: 'requestsPending',
                    dataName: 'Requests Pending',
                    data: 'No',
                    editable: false,
                }
            ]
        }
    );
}