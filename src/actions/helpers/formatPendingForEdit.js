export default function formatPendingForEdit(pending) {
    if(pending.mock) {
        return pending;
    }
    const date = new Date(pending.requestDate);
    date.setUTCHours(0);
    date.setUTCMinutes(0);
    date.setUTCSeconds(0);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1; // getUTCMonth returns zero-based
    let day = date.getUTCDate();
    if(day<10) {
        day = `0${day}`;
    }
    return {
        shareType: pending.shareClassSlug,
        shareholderName: pending.certificateTitle,
        numShares: pending.numShares.replace(',', ''),
        dateRequested: `${year}-${month}-${day}`,
        subsAgmt: pending.workflow[0].stepComplete,
        pymtRecd: pending.workflow[1].stepComplete
    }
}