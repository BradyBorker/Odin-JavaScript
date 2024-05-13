function switchTurn(players) {
    players.forEach((player) => {
        player.switchTurn();
    })
}

function makeAttack(players, coordinate) {
    let [attackedPlayer] = players.filter((player) => !player.myTurn);
    attackedPlayer.board.receiveAttack(coordinate);
    switchTurn(players)
    // eslint-disable-next-line no-use-before-define
    renderGameBoards(players)

    // TODO: Split into human & computer functions

    // If computer
    const attackingPlayer = players.filter((player) => player.myTurn)[0];
    [attackedPlayer] = players.filter((player) => !player.myTurn);
    if (!attackingPlayer.isHuman) {
        // Computer makes attack
        const attackCoordinate = attackingPlayer.attack(attackedPlayer);
        console.log(attackCoordinate)
        makeAttack(players, attackCoordinate);
    }
}

function renderGameBoards(players) {
    const [player1, player2] = players
    const playerVsComputer = !(player1.isHuman && player2.isHuman)

    players.forEach((player, index) => {
        const boardNode = document.querySelector(`.player${index + 1}-board`);
        const hitCoordinates = player.board.hitAttacks;
        const missedCoordinates = player.board.missedAttacks;
        const tiles = [];

        player.board.state.forEach((row, rowIndex) => {
            row.forEach(async (column, columnIndex) => {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                tile.id = `${index + 1}-${rowIndex}-${columnIndex}`
                if (column && player.isHuman && playerVsComputer) {
                    tile.classList.add('ship')
                }

                const ready = players.every((p) => p.isReady)
                if (ready && !player.myTurn && player.board.isAttackable([rowIndex, columnIndex]) && (!player.isHuman || !playerVsComputer)) {
                    const coordinate = tile.id.split('-').slice(1);
                    tile.addEventListener('click', () => {
                        makeAttack(players, coordinate)
                    })
                }

                tiles.push(tile)
            })
        })
        boardNode.replaceChildren(...tiles);

        hitCoordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            const tile = document.getElementById(`${index + 1}-${row}-${column}`);
            tile.classList.add('hit');
        })
        missedCoordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            const tile = document.getElementById(`${index + 1}-${row}-${column}`);
            tile.classList.add('missed');
        })
        /*
        if (playerVsComputer && !player.isHuman && player.myTurn) {

        } */
        // Computer attack logic. Where to move this?
    })
}

function staticShipPlacements(player, ship) {
    // TODO: Will be removed upon refactor
    const lengths = [5, 4, 3, 3, 2]
    const coordinates = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]];
    for (let i = 0; i < lengths.length; i += 1) {
        player.board.placeShip(ship(lengths[i]), coordinates[i])
    }
}

export default function startGame(players, ship) {
    /*
    Order of Events:
    0. TODO: Display board, then allow move to board, then readyUp
    1. Add to board
    2. Display board
    3. Ready Up
    4. Begin action
    */

    const battleShipContainer = document.querySelector('.battleship-container');
    battleShipContainer.classList.remove('removed');

    const [player1, player2] = players
    staticShipPlacements(player1, ship);
    player1.readyUp();
    staticShipPlacements(player2, ship);
    player2.readyUp();

    console.log(player1.isReady)

    renderGameBoards(players)
    // # TODO: Begin rounds, render after each round
}