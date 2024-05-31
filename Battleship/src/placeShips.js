export default function placedShips(player) {
    // Finish ship placement
    return new Promise((resolve) => {
        const readyUpButton = document.querySelector('.ready-up');
        readyUpButton.addEventListener('click', () => {
            readyUpButton.classList.add('removed');
            player.readyUp();
            const body = document.querySelector('body');
            const randomShipPlacementButton = document.querySelector('.random-ship-placement');
            body.removeChild(randomShipPlacementButton);

            const readyUpButtonClone = readyUpButton.cloneNode(true);
            readyUpButton.parentNode.replaceChild(readyUpButtonClone, readyUpButton);
            resolve();
        })
    })
}

export function staticShipPlacements(player, ship) {
    // TODO: Will be removed upon refactor
    const lengths = [5, 4, 3, 3, 2]
    const coordinates = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]];
    for (let i = 0; i < lengths.length; i += 1) {
        player.board.placeShip(ship(lengths[i]), coordinates[i])
    }
}

export function randomShipPlacement(player, ship, players, renderGameBoards) {
    const randomShipPlacementButton = document.createElement('button');
    const body = document.querySelector('body')
    randomShipPlacementButton.classList.add('random-ship-placement');
    randomShipPlacementButton.textContent = 'Randomize Ships!'
    body.appendChild(randomShipPlacementButton);

    randomShipPlacementButton.addEventListener('click', () => {
        player.board.removePlacedShips();
        const shipOrientations = ['horizontal', 'vertical'];

        [5, 4, 3, 3, 2].forEach((length) => {
            const placementPool = []
            for (let row = 0; row < 10; row += 1) {
                for (let col = 0; col < 10; col += 1) {
                    placementPool.push([row, col]);
                }
            }

            const randomOrientation = shipOrientations[Math.round(Math.random())];
            let randomIndex = Math.floor(Math.random() * placementPool.length)
            while (!player.board.placeShip(ship(length, randomOrientation), placementPool[randomIndex])) {
                randomIndex = Math.floor(Math.random() * placementPool.length)
            }

        })

        if (player.board.allShipsPlaced()) {
            const readyUpButton = document.querySelector('.ready-up');
            readyUpButton.classList.remove('removed');
        }

        renderGameBoards(players)
    })
}