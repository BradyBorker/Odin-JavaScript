function isUpperCase(char) {
    return char === char.toUpperCase();
}

function getUpperCaseIndexes(string) {
    const indexes = [];
    Array.from(string).forEach((char, index) => {
        if (char !== ' ' && char.match(/[a-z]/i) && isUpperCase(char)) {
            indexes.push(index);
        }
    })

    return indexes
}

function reUpperCase(array, upperCaseIndexes) {
    upperCaseIndexes.forEach((index) => {
        array[index] = array[index].toUpperCase();
    })

    return array
}

export default function (string, shiftFactor) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const alphabetIndex = {}
    alphabet.forEach((letter, index) => {
        alphabetIndex[letter] = index;
    })

    const upperCaseIndexes = getUpperCaseIndexes(string);
    const cipherArray = [];
    Array.from(string.toLowerCase()).forEach((char) => {
        if (char === ' ' || !char.match(/[a-z]/i)) {
            cipherArray.push(char)
            return
        }

        let alphaIndex = alphabetIndex[char];
        alphaIndex += shiftFactor % 26;

        if (alphaIndex > 25) {
            alphaIndex = alphaIndex - 26;
        }

        cipherArray.push(alphabet[alphaIndex])
    })

    return reUpperCase(cipherArray, upperCaseIndexes).join('');
}