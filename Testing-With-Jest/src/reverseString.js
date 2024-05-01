export default function (string) {
    let revString = ''
    for (let index = (string.length - 1); index >= 0; index -= 1) {
        revString += string.charAt(index);
    }
    return revString
}