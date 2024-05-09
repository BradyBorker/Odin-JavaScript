export default function ship(length, orientation = 'horizontal') {
    let hits = 0;
    const hitIndex = [];

    const hit = () => {
        hits += 1;
        return hits
    }

    const isSunk = () => (length - hits) <= 0

    return { length, orientation, hitIndex, hit, isSunk }
}