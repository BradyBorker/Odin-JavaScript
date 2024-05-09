export default function gameBoard() {
    const coordinates = []
    for (let row = 0; row < 10; row += 1) {
        coordinates.push([]);
        for (let col = 0; col < 10; col += 1) {
            coordinates[row].push(' ');
        }
    }
    console.log(coordinates.length)

    const placeShip = (ship) => {

    }

    return {}
}