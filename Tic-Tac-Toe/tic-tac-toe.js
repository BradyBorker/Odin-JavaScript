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

    place_marker = function(player) {
        // Getting input from the player, where to place marker needs to be index
        index1 = prompt("Index 1: needs to be 0-2");
        index2 = prompt("Index 2: Needs to be 0-2");
        
        board[index1][index2] = player.marker()
        gameBoard.display_board();
    }

    display_board = function() {
        for (let i = 0; i < board.length; i++) {
            console.log(...board[i]);
        }
    }

    return { reset_board, place_marker, display_board }
})();

tttGame = (function(player1, player2) {
    start_game = function() {
        while (!check_win()) {
            let current_player = (player1.my_turn) ? player1 : player2;

            gameBoard.display_board();
            gameBoard.place_marker(current_player);
            break;
        }
    }

    check_win = function() {

    }

    reset_game = function() {

    }

    return { start_game }
})(player('X', true), player('O'));

tttGame.start_game()
