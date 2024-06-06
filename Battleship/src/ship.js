export default function ship(length, orientation = 'horizontal') {
    const hitCoordinates = [];
    // Starting coordinate to help with orientation change?

    const hit = (coordinate) => {
        hitCoordinates.push(coordinate)
        return hitCoordinates
    }

    const isSunk = () => (length - hitCoordinates.length) <= 0

    return { length, orientation, hitCoordinates, hit, isSunk }
}