import gameBoard from "../gameBoard";
import ship from "../ship";

test('Creates a game board', () => {
    const board = gameBoard();
    expect(board).toBeDefined();
})

test('Valid horizontal ship placement; adds ship object to board', () => {
    const newShip = ship(2)
    const newGameBoard = gameBoard();
    expect(newGameBoard.placeShip(newShip, [0, 0])).toBeTruthy();
    expect(newGameBoard.state[0][0]).toEqual(newShip)
    expect(newGameBoard.state[0][1]).toEqual(newShip)
    expect(newGameBoard.state[0][2]).not.toEqual(newShip)
})

test('Invalid horizontal ship placement; does not add ship object to board', () => {
    const newShip = ship(2);
    const newGameBoard = gameBoard();
    expect(newGameBoard.placeShip(newShip, [0, 9])).toBeFalsy();
    expect(newGameBoard.placeShip(newShip, [-1, 0])).toBeFalsy();
    expect(newGameBoard.state[0][9]).not.toEqual(newShip);

    const oldShip = ship(2);
    newGameBoard.placeShip(oldShip, [0, 0]);
    expect(newGameBoard.placeShip(newShip, [0, 0])).toBeFalsy();
    expect(newGameBoard.placeShip(newShip, [0, 1])).toBeFalsy();
})

test('Valid vertical ship placement; adds ship object to board', () => {
    const newShip = ship(2, 'vertical');
    const newGameBoard = gameBoard();
    expect(newGameBoard.placeShip(newShip, [0, 0])).toBeTruthy();
    expect(newGameBoard.state[0][0]).toEqual(newShip);
    expect(newGameBoard.state[1][0]).toEqual(newShip);
    expect(newGameBoard.state[2][0]).not.toEqual(newShip)
})

test('Invalid vertical ship placement; does not add ship object to board', () => {
    const newShip = ship(2, 'vertical');
    const newGameBoard = gameBoard();
    expect(newGameBoard.placeShip(newShip, [9, 0])).toBeFalsy();
    expect(newGameBoard.placeShip(newShip, [-1, 0])).toBeFalsy();
    expect(newGameBoard.state[9][0]).not.toEqual(newShip);

    const oldShip = ship(2, 'vertical');
    newGameBoard.placeShip(oldShip, [0, 0]);
    expect(newGameBoard.placeShip(newShip, [0, 0])).toBeFalsy();
    expect(newGameBoard.placeShip(newShip, [1, 0])).toBeFalsy();
})

test('receiveAttack returns true if hit false if no hit', () => {
    const newShip = ship(2);
    const newGameBoard = gameBoard();
    newGameBoard.placeShip(newShip, [0, 0]);
    expect(newGameBoard.receiveAttack([0, 0])).toBeTruthy();
    expect(newGameBoard.receiveAttack([0, 1])).toBeTruthy();
    expect(newGameBoard.receiveAttack([0, 5])).toBeFalsy();
    expect(newGameBoard.hitAttacks).toEqual([[0, 0], [0, 1]]);
    expect(newGameBoard.missedAttacks).toEqual([[0, 5]]);
})

test('allSunk returns true if all ships have sunk', () => {
    const ship1 = ship(1);
    ship1.hit([]);
    const ship2 = ship(1);
    ship2.hit([]);
    const newGameBoard = gameBoard();
    newGameBoard.placeShip(ship1, [0, 0]);
    newGameBoard.placeShip(ship2, [1, 0]);
    expect(newGameBoard.allSunk()).toBeTruthy();
})

test('allSunk returns false if not all ships have sunk', () => {
    const ship1 = ship(1);
    ship1.hit([]);
    const ship2 = ship(1);
    const newGameBoard = gameBoard();
    newGameBoard.placeShip(ship1, [0, 0]);
    newGameBoard.placeShip(ship2, [1, 0]);
    expect(newGameBoard.allSunk()).toBeFalsy();
})

test('isAttackable returns true if coordinate has not been attacked', () => {
    const newGameBoard = gameBoard();
    newGameBoard.receiveAttack([0, 0]);
    expect(newGameBoard.isAttackable([1, 0])).toBeTruthy();
    expect(newGameBoard.isAttackable([0, 0])).toBeFalsy();
})

test('allShipsPlaced returns true if all ships have been placed', () => {
    const newGameBoard = gameBoard();
    newGameBoard.placeShip(ship(1), [0, 1]);
    newGameBoard.placeShip(ship(1), [1, 0]);
    newGameBoard.placeShip(ship(1), [2, 0]);
    newGameBoard.placeShip(ship(1), [3, 0]);
    newGameBoard.placeShip(ship(1), [4, 0]);
    expect(newGameBoard.allShipsPlaced()).toBeTruthy();
})

test('allShipsPlaced returns false if not all ships have been place', () => {
    const newGameBoard = gameBoard();
    expect(newGameBoard.allShipsPlaced()).toBeFalsy();
})

test('getShip returns the ship at the specified coordinate', () => {
    const newGameBoard = gameBoard();
    const newShip = ship(2);
    newGameBoard.placeShip(newShip, [0, 0]);
    expect(newGameBoard.getShip([0, 0])).toEqual(newShip);
})

test('getShipHeadCoordinate returns the first coordinate of the ship coordinates', () => {
    const newGameBoard = gameBoard();
    const newShip = ship(2);
    newGameBoard.placeShip(newShip, [0, 0]);
    expect(newGameBoard.getShipHeadCoordinate(newShip)).toEqual([0, 0]);
})

test('getShipCoordinates returns an Array of a ships coordinates', () => {
    const newGameBoard = gameBoard();
    const newShip = ship(2);
    newGameBoard.placeShip(newShip, [0, 0]);
    expect(newGameBoard.getShipCoordinates(newShip)).toEqual([[0, 0], [0, 1]]);
})