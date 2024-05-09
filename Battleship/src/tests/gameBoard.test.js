import gameBoard from "../gameBoard";
import ship from "../ship";

test('Creates a game board', () => {
    const board = gameBoard();
    expect(board).toBeDefined();
})