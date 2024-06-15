export default function gameBoard() {
  const state = [];
  const shipCoordinates = [];
  for (let row = 0; row < 10; row += 1) {
    state.push([]);
    for (let col = 0; col < 10; col += 1) {
      state[row].push(false);
    }
  }

  const restoreState = () => {
    shipCoordinates.forEach((shipObject) => {
      for (let i = 0; i < shipObject.coordinates.length; i += 1) {
        const [row, column] = shipObject.coordinates[i];
        if (state[row][column] !== shipObject.ship) {
          state[row][column] = shipObject.ship;
        }
      }
    });
  };

  const validShipPlacement = (coordinates) => {
    for (let i = 0; i < coordinates.length; i += 1) {
      const coordinate = coordinates[i];
      const [row, column] = coordinate;
      if (
        row < 0 ||
        row > 9 ||
        column < 0 ||
        column > 9 ||
        state[row][column]
      ) {
        return false;
      }
    }
    return true;
  };

  const getCoordsFromStartingCoord = (
    firstCoordinate,
    orientation,
    shipLength,
  ) => {
    const coordinates = [];
    for (let i = 0; i < shipLength; i += 1) {
      if (orientation === "horizontal") {
        coordinates.push([firstCoordinate[0], firstCoordinate[1] + i]);
      } else if (orientation === "vertical") {
        coordinates.push([firstCoordinate[0] + i, firstCoordinate[1]]);
      }
    }

    return coordinates;
  };

  const placeShip = (ship, firstCoordinate) => {
    const coordinates = getCoordsFromStartingCoord(
      firstCoordinate,
      ship.orientation,
      ship.length,
    );

    if (validShipPlacement(coordinates)) {
      const index = shipCoordinates.findIndex(
        (shipObject) => shipObject.ship === ship,
      );
      if (index > -1) {
        shipCoordinates[index].coordinates = coordinates;
      } else {
        shipCoordinates.push({ ship, coordinates });
      }

      coordinates.forEach((coordinate) => {
        const [row, column] = coordinate;
        state[row][column] = ship;
      });
      return true;
    }
    return false;
  };

  const allShipsPlaced = () => {
    const placedShips = [];
    state.forEach((row) => {
      row.forEach((column) => {
        if (column && !placedShips.includes(column)) {
          placedShips.push(column);
        }
      });
    });

    return placedShips.length === 5;
  };

  const removePlacedShips = () => {
    state.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        state[rowIndex][colIndex] = false;
      });
    });
    shipCoordinates.splice(0, shipCoordinates.length);
  };

  const removePlacedShip = (coordinates) => {
    coordinates.forEach((coordinate) => {
      const [row, column] = coordinate;
      state[row][column] = false;
    });
  };

  const getPlacedShips = () => {
    const shipsArray = [];
    shipCoordinates.forEach((shipObject) => {
      shipsArray.push(shipObject.ship);
    });
    return shipsArray;
  };

  const getShipAt = (coordinate) => {
    const [row, column] = coordinate;
    const theShip = state[row][column];
    return theShip;
  };

  const getShipHeadCoordinate = (ship) => {
    const index = shipCoordinates.findIndex(
      (shipObject) => shipObject.ship === ship,
    );
    if (index > -1) {
      return shipCoordinates[index].coordinates[0];
    }

    return false;
  };

  const getShipCoordinates = (ship) => {
    const index = shipCoordinates.findIndex(
      (shipObject) => shipObject.ship === ship,
    );
    if (index > -1) {
      return shipCoordinates[index].coordinates;
    }

    return false;
  };

  const hitAttacks = [];
  const missedAttacks = [];
  const receiveAttack = (coordinate) => {
    const [row, column] = coordinate;
    const boardTile = state[row][column];
    if (boardTile) {
      boardTile.hit(coordinate);
      hitAttacks.push(coordinate);
      return true;
    }
    missedAttacks.push(coordinate);
    return false;
  };

  const validAttack = (coordinate) => {
    const [row, column] = coordinate;
    return row >= 0 && row <= 9 && column >= 0 && column <= 9;
  };

  const isAttackable = (coordinate) => {
    const allAttacks = hitAttacks
      .concat(missedAttacks)
      .map((attack) => JSON.stringify(attack));
    return (
      !allAttacks.includes(JSON.stringify(coordinate)) &&
      validAttack(coordinate)
    );
  };

  const isHitAt = (coordinate) =>
    hitAttacks
      .map((attack) => JSON.stringify(attack))
      .includes(JSON.stringify(coordinate));

  const allSunk = () => {
    const ships = getPlacedShips();
    return ships.every((ship) => ship.isSunk());
  };

  return {
    restoreState,
    placeShip,
    receiveAttack,
    allSunk,
    isAttackable,
    allShipsPlaced,
    removePlacedShips,
    removePlacedShip,
    getShipAt,
    getShipHeadCoordinate,
    getShipCoordinates,
    getCoordsFromStartingCoord,
    validShipPlacement,
    isHitAt,
    state,
    hitAttacks,
    missedAttacks,
  };
}
