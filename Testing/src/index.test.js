import capitalize from "./capitalize";
import reverseString from "./reverseString";
import calculator from "./calculator";
import caesarCipher from "./caesarCipher";
import analyzeArray from "./analyzeArray";

test('Capitalizes first character', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('goodbye')).toBe('Goodbye');
})

test('Reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
})

test('Calculates addition', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test('Calculates division', () => {
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(12, 4)).toBe(3);
})

test('Calculates multiplication', () => {
    expect(calculator.multiply(4, 4)).toBe(16);
})

test('Ciphers correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('abc', 120)).toBe('qrs');
    expect(caesarCipher('abc abc.', 1)).toBe('bcd bcd.');
    expect(caesarCipher('aBc', 1)).toBe('bCd');
    expect(caesarCipher('xyz', 5)).toBe('cde');
})

test('Analyzes array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
})