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
    const indexes = { "1": [0, 0], "2": [0, 1], "3": [0, 2], "4": [1, 0], "5": [1, 1], "6": [1, 2], "7": [2, 0], "8": [2, 1], "9": [2, 2]};
    let tilesRemaining = 9;

    reset_board = function() {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = ' ';
            }
        }
    }

    place_marker = function(player, rowIndex, colIndex) {
        board[rowIndex][colIndex] = player.marker();
        tilesRemaining--;
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

    is_marked_by_player = function(marker, rowIndex, colIndex) {
        return (board[rowIndex][colIndex] === marker) ? true : false;
    }

    get_indexs = function(tile_id) {
        return indexes[tile_id]
    }

    tile_already_marked = function(rowIndex, colIndex) {
        return (board[rowIndex][colIndex] !== ' ') ? true : false
    }

    no_tiles_remaining = function() {
        return (tilesRemaining === 0) ? true : false;
    }

    return { reset_board, place_marker, display_board, is_marked_by_player, in_range, get_indexs, tile_already_marked, no_tiles_remaining }
})();

tttGame = (function(player1, player2) {
    play_round = function(rowIndex, colIndex, tile) {
        let current_player = (player1.my_turn()) ? player1 : player2;

        if (gameBoard.tile_already_marked(rowIndex, colIndex)) {
            return false;
        }
        gameBoard.place_marker(current_player, rowIndex, colIndex);
        tile.textContent = current_player.marker()
        
        if (check_win(current_player, rowIndex, colIndex)) {
            console.log("WIN")
            return;
        } else if (gameBoard.no_tiles_remaining()) {
            console.log("TIE")
        } else {
            player1.switch_turn();
            player2.switch_turn();
        }

        return;
    }

    check_win = function(player, rowIndex, colIndex) {
        const startingRow = rowIndex;
        const startingCol = colIndex;

        horizontal = () => {
            let winCounter = 0;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.is_marked_by_player(player.marker(), rowIndex, colIndex)) {
                    winCounter++;
                }
                colIndex++;
            }

            colIndex = startingCol - 1;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.is_marked_by_player(player.marker(), rowIndex, colIndex)) {
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
                if (gameBoard.is_marked_by_player(player.marker(), rowIndex, colIndex)) {
                    winCounter++;
                }
                rowIndex++;
            }

            rowIndex = startingRow - 1;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.is_marked_by_player(player.marker(), rowIndex, colIndex)) {
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
                if (gameBoard.is_marked_by_player(player.marker(), rowIndex, colIndex)) {
                    winCounter++;
                }
                rowIndex--;
                colIndex++;
            }

            rowIndex = startingRow + 1;
            colIndex = startingCol - 1;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.is_marked_by_player(player.marker(), rowIndex, colIndex)) {
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
            let winCounter = 0;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.is_marked_by_player(player.marker(), rowIndex, colIndex)) {
                    winCounter++;
                }
                rowIndex++;
                colIndex++;
            }

            rowIndex = startingRow - 1;
            colIndex = startingCol - 1;
            while (gameBoard.in_range(rowIndex, colIndex)) {
                if (gameBoard.is_marked_by_player(player.marker(), rowIndex, colIndex)) {
                    winCounter++;
                }
                rowIndex--;
                colIndex--;
            }

            return (winCounter === 3) ? true : false;
        }

        return (horizontal() || vertical() || pos_diagonal() || neg_diagonal()) ? true : false;
    }

    reset_game = function() {

    }

    return { play_round }
})(player('X', true), player('O'));

dom = (function() {
    const tiles = document.querySelectorAll(".tile")
    tiles.forEach((tile) => {
        tile.addEventListener('click', (e) => {
            [rowIndex, colIndex] = gameBoard.get_indexs(e.target.id);
            let result = tttGame.play_round(rowIndex, colIndex, e.target);
        })
    })
})();
