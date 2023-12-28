function player(m, my_turn=false) {
    marker = () => m;
    switch_turn = function() {
        this.my_turn = this.my_turn ? false : true
    }

    return { marker, my_turn, switch_turn }
}

gameBoard = (function() {
    const board = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']];

    reset_board = function() {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = ' ';
            }
        }
    }

    place_marker = function(player, rowIndex, colIndex) {
        // Getting input from the player, where to place marker needs to be index
        board[rowIndex][colIndex] = player.marker()
        gameBoard.display_board();
    }

    display_board = function() {
        for (let i = 0; i < board.length; i++) {
            console.log(...board[i]);
        }
    }

    in_range = function(rowIndex, colIndex) {
        if (rowIndex >= 0 && rowIndex <= 2 && colIndex >= 0 && colIndex <= 2) {
            return true;
        }
    }

    has_marker = function(marker, rowIndex, colIndex) {
        return (board[rowIndex][colIndex] === marker) ? true : false;
    }

    return { reset_board, place_marker, display_board, board_includes, has_marker }
})();

tttGame = (function(player1, player2) {
    start_game = function() {
        while (!check_win()) {
            let current_player = (player1.my_turn) ? player1 : player2;

            gameBoard.display_board();
            rowIndex = prompt("Index 1: needs to be 0-2");
            colIndex = prompt("Index 2: Needs to be 0-2");
            gameBoard.place_marker(current_player, rowIndex, colIndex);
            if (check_win(current_player, rowIndex, colIndex)) {
                console.log("WIN")
                break;
            }
            break;
        }
    }

    check_win = function(player, rowIndex, colIndex) {
        // Check horizontal, vertical, diagonal
        let winCounter = 1;

        horizontal = () => {
            let starting_col = colIndex;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                colIndex += 1;
                if (gameBoard.has_marker(player.marker(), rowIndex, colIndex)) {

                }
            }
        }

        vertical = () => {

        }

        diagonal = () => {

        }
    }

    reset_game = function() {

    }

    return { start_game }
})(player('X', true), player('O'));

tttGame.start_game()
