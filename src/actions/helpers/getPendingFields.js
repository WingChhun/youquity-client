export default function getPendingFields(data, id) {
    if(id) {
        return({
            id: id,
            requestDate: data.dateRequested,
            workflow: {
                subsAgmt: (data.subsAgmt ? true : false),
                pymtRecd: (data.pymtRecd ? true : false),
            }
        })

    } else {
        return({
            requestDate: data.dateRequested,
            subsAgmt: (data.subsAgmt ? true : false),
            pymtRecd: (data.pymtRecd ? true : false),
        });
    }
}