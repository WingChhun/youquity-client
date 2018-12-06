export default function formatDate(dateStr) {
    let date = new Date(dateStr);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    const month = date.getUTCMonth() + 1; // getMonth returns zero-based
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return(`${month}/${day}/${year}`);
}