export function renderGameBoards(players) {
    players.forEach((player, index) => {
        const boardNode = document.querySelector(`.player${index + 1}-board`);
        const hitCoordinates = player.board.hitAttacks;
        const missedCoordinates = player.board.missedAttacks;
        const tiles = [];

        player.board.state.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                tile.id = `${rowIndex}-${columnIndex}`
                if (column) {
                    tile.classList.add('ship')
                }
                tiles.push(tile)
            })
        })
        boardNode.replaceChildren(...tiles);

        hitCoordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            const tile = document.querySelector(`#${row}-${column}`);
            tile.classList.add('hit');
            tile.removeEventListener('click');
        })
        missedCoordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            const tile = document.querySelector(`#${row}-${column}`);
            tile.classList.add('missed');
            tile.removeEventListener('click');
        })
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
    const battleShipContainer = document.querySelector('.battleship-container');
    battleShipContainer.classList.remove('removed');

    const [player1, player2] = players
    staticShipPlacements(player1, ship);
    staticShipPlacements(player2, ship);

    renderGameBoards(players)
}