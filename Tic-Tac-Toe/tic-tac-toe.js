function player(m, turn=false) {
    marker = () => m;
    my_turn = () => turn;

    switch_turn = function() {
        turn = turn ? false : true
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

    return { reset_board, place_marker, display_board, has_marker, in_range }
})();

tttGame = (function(player1, player2) {
    play_game = function() {
        let current_player = (player1.my_turn()) ? player1 : player2;

        gameBoard.display_board();
        rowIndex = Number(prompt("Index 1: needs to be 0-2"));
        colIndex = Number(prompt("Index 2: Needs to be 0-2"));
        gameBoard.place_marker(current_player, rowIndex, colIndex);
        if (check_win(current_player, rowIndex, colIndex)) {
            console.log("WIN")
            return;
        } else {
            this.play_game()
        }
    }

    check_win = function(player, rowIndex, colIndex) {
        const startingRow = rowIndex;
        const startingCol = colIndex;

        horizontal = () => {
            let winCounter = 0;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.has_marker(player.marker(), rowIndex, colIndex)) {
                    winCounter++;
                }
                colIndex++;
            }

            colIndex = startingCol - 1;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.has_marker(player.marker(), rowIndex, colIndex)) {
                    winCounter++;
                }
                colIndex--;
            }

            rowIndex = startingRow;
            colIndex = startingCol;
            return (winCounter === 3) ? true : false;
        }

        vertical = () => {
            let winCounter = 0;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.has_marker(player.marker(), rowIndex, colIndex)) {
                    winCounter++;
                }
                rowIndex++;
            }

            rowIndex = startingRow - 1;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.has_marker(player.marker(), rowIndex, colIndex)) {
                    winCounter++;
                }
                rowIndex--;
            }

            rowIndex = startingRow;
            colIndex = startingCol;
            return (winCounter === 3) ? true : false;
        }

        pos_diagonal = () => {
            let winCounter = 0;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.has_marker(player.marker(), rowIndex, colIndex)) {
                    winCounter++;
                }
                rowIndex--;
                colIndex++;
            }

            rowIndex = startingRow + 1;
            colIndex = startingCol - 1;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.has_marker(player.marker(), rowIndex, colIndex)) {
                    winCounter++
                }
                rowIndex++;
                colIndex--;
            }

            rowIndex = startingRow;
            colIndex = startingCol;
            return (winCounter === 3) ? true : false;
        }

        neg_diagonal = () => {
            // row++ && col++
            // row-- && col--
            let winCounter = 0;
            return false;
        }

        return (horizontal() || vertical() || pos_diagonal() || neg_diagonal()) ? true : false;
    }

    reset_game = function() {

    }

    return { play_game }
})(player('X', true), player('O'));

tttGame.play_game()
