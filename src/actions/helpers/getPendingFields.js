export default function getPendingFields(data) {
    return({
        requestDate: data.dateRequested,
        subsAgmt: (data.subsAgmt ? true : false),
        pymtRecd: (data.pymtRecd ? true : false),
    });
}