function player(m, name, turn=false) {
    marker = () => m;
    my_turn = () => turn;

    switch_turn = function() {
        turn = turn ? false : true
    }

    return { marker, my_turn, switch_turn, name }
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

    not_empty_tile = function(rowIndex, colIndex) {
        return (board[rowIndex][colIndex] !== ' ') ? true : false
    }

    no_tiles_remaining = function() {
        return (tilesRemaining === 0) ? true : false;
    }

    return { reset_board, place_marker, display_board, is_marked_by_player, in_range, get_indexs, not_empty_tile, no_tiles_remaining }
})();

tttGame = (function(player1, player2) {
    play_round = function(rowIndex, colIndex, tile) {
        let current_player = (player1.my_turn()) ? player1 : player2;

        if (gameBoard.not_empty_tile(rowIndex, colIndex)) {
            return false;
        }
        gameBoard.place_marker(current_player, rowIndex, colIndex);
        tile.textContent = current_player.marker()
        
        if (check_win(current_player, rowIndex, colIndex)) {
            console.log("WIN");
            return { 'marker': current_player.marker(), 'win': true, 'tie': false };
        } else if (gameBoard.no_tiles_remaining()) {
            console.log("TIE");
            return { 'marker': current_player.marker(), 'win': false, 'tie': true };
        } else {
            player1.switch_turn();
            player2.switch_turn();
        }

        return { 'marker': current_player.marker(), 'win': false, 'tie': false };
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

    return { play_round, player1, player2 }
})(player('X', 'Player 1', true), player('O', 'Player 2'));

dom = (function() {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile) => {
        tile.addEventListener('click', (e) => {
            [rowIndex, colIndex] = gameBoard.get_indexs(e.target.id);
            
            let result = tttGame.play_round(rowIndex, colIndex, e.target);
            if (result) {
                e.target.classList.add(result.marker)

                if (result.win) {
                    // Mabe some pop up here? 
                    // Some congrats message, and play again option
                } else if (result.tie) {
                    // Same as above but different message.
                }
            }
        })
    })

    const playerNameInputs = document.querySelectorAll('.player-name');
    playerNameInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            if (e.target.id === 'player1-name') {
                tttGame.player1.name = e.target.value;
            } else {
                tttGame.player2.name = e.target.value;
            }
        })
    })

    // dom functions here
})();
