export default function createSlug(string) {
    // split string into words
    string = string.split(' ');
    // capitalize first letter of each word
    const capitalized = string.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    // strip spaces/combine words
    const result = capitalized.join('');
    // lowercase first letter of combined slug
    return result.charAt(0).toLowerCase() + result.slice(1);
}