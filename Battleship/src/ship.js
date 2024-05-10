export default function ship(length, orientation = 'horizontal') {
    const hitIndex = [];

    const hit = (index) => {
        hitIndex.push(index)
        return hitIndex
    }

    const isSunk = () => (length - hitIndex.length) <= 0

    return { length, orientation, hitIndex, hit, isSunk }
}