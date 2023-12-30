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

    reset_tiles = function() {
        tilesRemaining = 9;
    }

    return { reset_board, place_marker, is_marked_by_player, in_range, get_indexs, not_empty_tile, no_tiles_remaining, reset_tiles }
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
            return { current_player, 'win': true, 'tie': false };
        } else if (gameBoard.no_tiles_remaining()) {
            return { current_player, 'win': false, 'tie': true };
        } else {
            player1.switch_turn();
            player2.switch_turn();
        }

        return { current_player, 'win': false, 'tie': false };
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
        if (!player1.my_turn()) {
            player1.switch_turn();
            player2.switch_turn();
        }

        gameBoard.reset_board();
        gameBoard.reset_tiles();
    }

    return { play_round, reset_game, player1, player2 }
})(player('X', 'Player 1', true), player('O', 'Player 2'));

dom = (function() {
    const tiles = document.querySelectorAll(".tile");
    const playersContainer = document.querySelector(".players-container");
    const ticTacToeBoard = document.querySelector(".tic-tac-toe");
    const winModal = document.querySelector(".modal.win");
    const winMessage = document.querySelector(".win-message")
    const tieModal = document.querySelector(".modal.tie")

    const hideGameBoard = () => {
        playersContainer.classList.add("hide");
        ticTacToeBoard.classList.add("hide");
    };

    tiles.forEach((tile) => {
        tile.addEventListener('click', (e) => {
            [rowIndex, colIndex] = gameBoard.get_indexs(e.target.id);
            
            let result = tttGame.play_round(rowIndex, colIndex, e.target);
            if (result) {
                e.target.classList.add(`${result.current_player.marker()}`)

                if (result.win) {
                    hideGameBoard();
                    winMessage.textContent = `${result.current_player.name} Wins!`
                    winModal.classList.add("display");

                } else if (result.tie) {
                    hideGameBoard();
                    tieModal.classList.add("display");
                }
            }
        })
    })

    const modalButtons = document.querySelectorAll(".modal > button")
    modalButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            tiles.forEach((tile) => {
                if (tile.textContent !== '') {
                    tile.classList.remove(`${tile.textContent}`);
                    tile.textContent = '';
                }
            });
            ticTacToeBoard.classList.remove('hide');
            playersContainer.classList.remove("hide");

            e.target.parentNode.classList.remove("display")
            tttGame.reset_game();
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
})();
