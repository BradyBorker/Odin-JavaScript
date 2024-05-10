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
    expect(newGameBoard.board[0][0]).toEqual(newShip)
    expect(newGameBoard.board[0][1]).toEqual(newShip)
    expect(newGameBoard.board[0][2]).not.toEqual(newShip)
    expect(newGameBoard.shipCoordinates).toEqual([{ 'ship': newShip, 'coordinates': [[0, 0], [0, 1]] }])
})

test('Invalid horizontal ship placement; does not add ship object to board', () => {
    const newShip = ship(2);
    const newGameBoard = gameBoard();
    expect(newGameBoard.placeShip(newShip, [0, 9])).toBeFalsy();
    expect(newGameBoard.placeShip(newShip, [-1, 0])).toBeFalsy();
    expect(newGameBoard.board[0][9]).not.toEqual(newShip);
    expect(newGameBoard.shipCoordinates).toEqual([]);

    const oldShip = ship(2);
    newGameBoard.placeShip(oldShip, [0, 0]);
    expect(newGameBoard.placeShip(newShip, [0, 0])).toBeFalsy();
    expect(newGameBoard.placeShip(newShip, [0, 1])).toBeFalsy();
})

test('Valid vertical ship placement; adds ship object to board', () => {
    const newShip = ship(2, 'vertical');
    const newGameBoard = gameBoard();
    expect(newGameBoard.placeShip(newShip, [0, 0])).toBeTruthy();
    expect(newGameBoard.board[0][0]).toEqual(newShip);
    expect(newGameBoard.board[1][0]).toEqual(newShip);
    expect(newGameBoard.board[2][0]).not.toEqual(newShip)
    expect(newGameBoard.shipCoordinates).toEqual([{ 'ship': newShip, 'coordinates': [[0, 0], [1, 0]] }])
})

test('Invalid vertical ship placement; does not add ship object to board', () => {
    const newShip = ship(2, 'vertical');
    const newGameBoard = gameBoard();
    expect(newGameBoard.placeShip(newShip, [9, 0])).toBeFalsy();
    expect(newGameBoard.placeShip(newShip, [-1, 0])).toBeFalsy();
    expect(newGameBoard.board[9][0]).not.toEqual(newShip);
    expect(newGameBoard.shipCoordinates).toEqual([]);

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
})