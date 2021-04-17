export function shuffle(array) {
    let arrayToSplice = [...array]
    let copy = [], n = array.length, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        let colorObj = {
            color: arrayToSplice.splice(i, 1)[0],
            show: false,
            coupleFound: false,
            hidden: false,
        }
        copy.push({...colorObj});
    }
    return copy;
}