import ship from "./ship";

function draggedFromInsideBoard(e, player, players, renderGameBoards) {
    const coordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    const theShip = player.board.getShipAt(coordinate);

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

    const shipCoordinates = player.board.getShipCoordinates(theShip);
    const preservedCoordinates = shipCoordinates.map((coord) => JSON.stringify(coord));

    player.board.removePlacedShip(shipCoordinates);

    renderGameBoards(players, { 'origin': 'insideBoard', 'ship': theShip }, preservedCoordinates)
}

export function draggableFromInside(tile, player, players, renderGameBoards) {
    tile.setAttribute('draggable', 'true');
    tile.addEventListener('dragstart', (e) => {
        draggedFromInsideBoard(e, player, players, renderGameBoards);
    })

    tile.addEventListener('dragend', (e) => {
        const ghostShip = document.querySelector('#drag-ghost')
        if (ghostShip.parentElement) {
            ghostShip.parentElement.removeChild(ghostShip);
        }

        if (e.dataTransfer.dropEffect === 'none') {
            player.board.restoreState();
            renderGameBoards(players);
        }
    })
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

export function draggableFromOutside(shipContainerElement, draggableShipsContainer, players, renderGameBoards) {
    shipContainerElement.addEventListener('dragstart', (e) => {
        draggedFromOutsideBoard(e, players, renderGameBoards);
    });

    shipContainerElement.addEventListener('dragend', (e) => {
        if (e.dataTransfer.dropEffect !== 'none') {
            draggableShipsContainer.removeChild(e.target)
        }
    })
}

function droppedFromInsideBoard(dragData, player, e, players, renderGameBoards) {
    const theShip = dragData.ship

    const startingCoordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    player.board.placeShip(theShip, startingCoordinate)

    renderGameBoards(players);
}

export function droppableFromInside(tile, dragData, player, players, renderGameBoards) {
    tile.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    })

    tile.addEventListener('drop', (e) => {
        e.preventDefault();
        droppedFromInsideBoard(dragData, player, e, players, renderGameBoards);
    })
}

function droppedFromOutsideBoard(dragData, player, e, players, renderGameBoards) {
    const startingCoordinate = e.target.id.split('-').slice(-2).map((number) => Number(number));
    player.board.placeShip(ship(dragData.shipLength, dragData.shipOrientation), startingCoordinate)

    if (player.board.allShipsPlaced()) {
        const readyUpButton = document.querySelector('.ready-up');
        readyUpButton.classList.remove('removed');
    }

    renderGameBoards(players);
}

export function droppableFromOutside(tile, dragData, player, players, renderGameBoards) {
    tile.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    })

    tile.addEventListener('drop', (e) => {
        e.preventDefault();
        droppedFromOutsideBoard(dragData, player, e, players, renderGameBoards);
    })
}