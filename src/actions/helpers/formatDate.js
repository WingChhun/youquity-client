export default function formatDate(dateStr) {
    let date = new Date(`${dateStr} 00:00:00`);
    const month = date.getMonth() + 1; // getMonth returns zero-based
    const day = date.getDate();
    const year = date.getFullYear();

    return(`${month}/${day}/${year}`);
}