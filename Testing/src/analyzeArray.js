export default function (array) {
    const average = array.reduce((total, num) => total += num, 0) / array.length
    const length = array.length;
    const min = array.sort().shift();
    const max = array.sort().pop();

    return { average, min, max, length }
}