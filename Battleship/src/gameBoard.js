export default function gameBoard() {
    const board = [];
    for (let row = 0; row < 10; row += 1) {
        board.push([]);
        for (let col = 0; col < 10; col += 1) {
            board[row].push(false);
        }
    }

    const shipCoordinates = [
        /*
        {
            ship: ship object,
            coordiantes: [[]]
        }
        */
    ]

    // valid ship placement function
    const validShipPlacement = (coordinates) => {
        // Onboard check
        // Not colliding with other ships
        for (let i = 0; i < coordinates.length; i += 1) {
            const coordinate = coordinates[i];
            const [row, column] = coordinate;
            if (row < 0 || row > 9 || column < 0 || column > 9 || board[row][column]) {
                return false
            }
        }
        return true
    }

    const placeShip = (ship, firstCoordinate) => {
        const coordinates = []
        for (let i = 0; i < ship.length; i += 1) {
            if (ship.orientation === 'horizontal') {
                coordinates.push([firstCoordinate[0], firstCoordinate[1] + i])
            } else if (ship.orientation === 'vertical') {
                coordinates.push([firstCoordinate[0] + i, firstCoordinate[1]])
            }
        }

        if (validShipPlacement(coordinates)) {
            shipCoordinates.push({ 'ship': ship, 'coordinates': coordinates })
            coordinates.forEach((coordinate) => {
                const [row, column] = coordinate;
                board[row][column] = ship;
            })
            return true
        }
        return false

    }

    return { placeShip, board }
}

/*
Ideas for Ship storage
1. Element ids for grid are the row and column: 00, 01, etc.
1a. Element class contains the ship name (Updated when ship is placed for every element)
2. gameBoard stores ships like so:
    const ships = {
        'shipName': {
            head: Coordinate (beginning of the ship),
            ship: ship object
        }
    }
3. openCoordinates Array gets updated when ship is moved into place
3a. true when space is open
3b. false when space is closed
*/
/*
INSTEAD:
shipCoordinates = {
    "coordinate": {
        ship: ship object
    }
}
*/