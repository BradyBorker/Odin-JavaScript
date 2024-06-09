import ship from "./ship";

export default function finishedPlacingShips(player) {
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

function displayReadyUpButton() {
    const readyUpButton = document.querySelector('.ready-up');
    readyUpButton.classList.remove('removed');
}

export function randomShipPlacement(player, players, renderGameBoards) {
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

    if (player.isHuman && player.board.allShipsPlaced()) {
        displayReadyUpButton();
    }

    renderGameBoards(players)
}

export function createRandomShipPlacementButton(player, players, renderGameBoards) {
    const randomShipPlacementButton = document.createElement('button');
    const body = document.querySelector('body')
    randomShipPlacementButton.classList.add('random-ship-placement');
    randomShipPlacementButton.textContent = 'Randomize Ships!'
    body.appendChild(randomShipPlacementButton);

    randomShipPlacementButton.addEventListener('click', () => randomShipPlacement(player, players, renderGameBoards))
    randomShipPlacementButton.addEventListener('click', () => {
        const draggableShipsContainer = document.querySelector('.draggable-ships-container');
        while (draggableShipsContainer.firstChild) {
            draggableShipsContainer.removeChild(draggableShipsContainer.firstChild)
        }
    })
}

// TODO:
// Add ships to ship-placement-container
// Allow them to be draggable but not droppable
// give class to ships: length-#
// For Board:
//  Make ships draggable and droppable

// TODO: Two draggable functions
// 1. From outside the board
// 2. From inside the board
export function draggedFromInsideBoard(e, player, players, renderGameBoards) {
    const coordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    const theShip = player.board.getShip(coordinate);

    const ghostShip = document.createElement('div');
    ghostShip.id = 'drag-ghost';
    ghostShip.style.height = `${theShip.length * 25}px`;

    for (let i = 0; i < theShip.length; i += 1) {
        const ghostShipBody = document.createElement('div')
        ghostShipBody.classList.add('ghost-ship-body');
        ghostShip.appendChild(ghostShipBody);
    }

    document.body.appendChild(ghostShip);
    e.dataTransfer.setDragImage(ghostShip, 0, 0);


    // renderGameBoards(players, { 'origin': 'insideBoard', 'shipLength': theShip.length, 'shipOrientation': theShip.orientation })
}

export function droppedFromInsideBoard(dragData, player, e, players, renderGameBoards) {
    renderGameBoards(players);
}

function draggedFromOutsideBoard(e, players, renderGameBoards) {
    e.dataTransfer.dropEffect = 'move'
    const re = /length-(\d)/;
    for (let i = 0; i < e.target.classList.length; i += 1) {
        if (re.test(e.target.classList[i])) {
            e.dataTransfer.setData('text/plain', e.target.classList[i].split('-')[1]);
            break
        }
    }

    renderGameBoards(players, { 'origin': 'outsideBoard', 'shipLength': Number(e.dataTransfer.getData('text/plain')), 'shipOrientation': 'vertical' })
}

export function droppedFromOutsideBoard(dragData, player, e, players, renderGameBoards) {
    const startingCoordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    player.board.placeShip(ship(dragData.shipLength, dragData.shipOrientation), startingCoordinate)

    renderGameBoards(players);
}

export function createDraggableShipElements(player, players, renderGameBoards) {
    const draggableShipsContainer = document.querySelector('.draggable-ships-container');
    [5, 4, 3, 3, 2].forEach((length) => {
        const shipContainerElement = document.createElement('div');
        shipContainerElement.classList.add('ship-container', `length-${length}`);
        shipContainerElement.setAttribute('draggable', 'true');

        shipContainerElement.addEventListener('dragstart', (e) => {
            draggedFromOutsideBoard(e, players, renderGameBoards);
        });

        shipContainerElement.addEventListener('dragend', (e) => {
            if (e.dataTransfer.dropEffect !== 'none') {
                draggableShipsContainer.removeChild(e.target)
            }
            if (player.board.allShipsPlaced()) {
                displayReadyUpButton();
            }
        })

        for (let index = 0; index < length; index += 1) {
            const shipBody = document.createElement('div');
            shipBody.classList.add('ship-body');
            shipContainerElement.appendChild(shipBody);
        }

        draggableShipsContainer.appendChild(shipContainerElement);
    })
}

/*
TODO:
Valid droppable target.
Needs
1. length of ship
2. Orientation

Idea:
1. On dragstart
2. create ship
3. Iterate through board
4. If valid ship placement
5. add droppable event listeners
*/