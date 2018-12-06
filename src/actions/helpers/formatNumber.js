export default function formatNumber(number, decPlaces = 0) {
    // return zero if we get a falsy number
    if(!number) {
        return 0;
    }

    // round if necessary
    number = parseFloat(number).toFixed(decPlaces);

    // split out the integer and decimal portions
    let int = number.split('.')[0];
    let dec = number.split('.')[1];

    // process the int to string with commas
    int = int.split('');
    for(let place=int.length-3; place > 0; place -= 3) {
        int.splice(place, 0, ',');
    }
    int = int.join('');

    // make sure dec is the prescribed length
    if(dec && (dec.length < decPlaces)) {
        do {
            dec = `${dec}0`;
        } while (dec.length < decPlaces);
    }

    if(dec) {
        return `${int}.${dec}`;
    }

    return int;

}