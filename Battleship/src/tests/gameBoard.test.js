import gameBoard from "../gameBoard";
import ship from "../ship";

test('Creates a game board', () => {
    const board = gameBoard();
    expect(board).toBeDefined();
})

test('Valid horizontal ship placement, adds ship object to board', () => {
    const newShip = ship(2)
    const newGameBoard = gameBoard();
    expect(newGameBoard.placeShip(newShip, [0, 0])).toBeTruthy();
    expect(newGameBoard.board[0][0]).toEqual(newShip)
    expect(newGameBoard.board[0][1]).toEqual(newShip)
    expect(newGameBoard.board[0][2]).not.toEqual(newShip)
})