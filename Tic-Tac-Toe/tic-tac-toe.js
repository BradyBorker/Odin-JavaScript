function player(m, my_turn=false) {
    marker = () => m;
    switch_turn = function() {
        this.my_turn = this.my_turn ? false : true
    }

    return { marker, my_turn, switch_turn }
}

gameBoard = (function() {

})();