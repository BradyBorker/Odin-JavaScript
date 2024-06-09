/* eslint-disable no-use-before-define */
import finishedPlacingShips, { createRandomShipPlacementButton, randomShipPlacement, createDraggableShipElements, droppedFromOutsideBoard, draggedFromInsideBoard, droppedFromInsideBoard } from "./placeShips";

function switchTurn(players) {
    players.forEach((player) => {
        player.switchTurn();
    })
}

function isGameOver(players) {
    const loser = players.filter((player) => player.board.allSunk());
    if (loser.length > 0) {
        const [winner] = players.filter((player) => !player.board.allSunk());
        console.log(`Winner: ${winner.name}`)
        return true;
    }
    return false;
}

function makeAttack(players, coordinate) {
    let [attackedPlayer] = players.filter((player) => !player.myTurn);
    let [attackingPlayer] = players.filter((player) => player.myTurn);

    if (!attackingPlayer.isHuman) {
        attackingPlayer.logAttack(attackedPlayer.board.receiveAttack(coordinate), coordinate);
    } else {
        attackedPlayer.board.receiveAttack(coordinate);
    }

    if (isGameOver(players)) {
        renderGameBoards(players, true);
        return;
    }
    switchTurn(players);
    renderGameBoards(players);

    // Computer Attack
    [attackedPlayer] = players.filter((player) => !player.myTurn);
    [attackingPlayer] = players.filter((player) => player.myTurn);
    if (!attackingPlayer.isHuman) {
        const attackCoordinate = attackingPlayer.attack(attackedPlayer);
        makeAttack(players, attackCoordinate);
    }
}

function renderGameBoards(players, dragData = {}, gameOver = false) {
    const [player1, player2] = players
    const playerVsComputer = !(player1.isHuman && player2.isHuman)
    const playerPlacingShips = players.find((player) => !player.isReady);

    players.forEach((player, index) => {
        const boardNode = document.querySelector(`.player${index + 1}-board`);
        const hitCoordinates = player.board.hitAttacks;
        const missedCoordinates = player.board.missedAttacks;
        const tiles = [];
        player.board.state.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                tile.id = `p${index + 1}-${rowIndex}-${columnIndex}`

                // Draggable tile
                if (column && player === playerPlacingShips && player.isHuman) {
                    tile.setAttribute('draggable', 'true');
                    tile.addEventListener('dragstart', (e) => {
                        draggedFromInsideBoard(e, player, players, renderGameBoards);
                    })

                    tile.addEventListener('dragend', () => {
                        const ghostShip = document.querySelector('#drag-ghost')
                        if (ghostShip.parentElement) {
                            ghostShip.parentElement.removeChild(ghostShip);
                        }
                        console.log('end')
                    })
                }

                // Droppable tile
                if (Object.keys(dragData).length > 0 && !column && player === playerPlacingShips && player.isHuman && player.board.validShipPlacement(player.board.getCoordsFromStartingCoord([rowIndex, columnIndex], dragData.shipOrientation, dragData.shipLength))) {
                    tile.addEventListener('dragover', (e) => {
                        e.preventDefault();
                        e.dataTransfer.dropEffect = 'move';
                    })

                    tile.addEventListener('drop', (e) => {
                        e.preventDefault();
                        if (dragData.origin === 'outsideBoard') {
                            droppedFromOutsideBoard(dragData, player, e, players, renderGameBoards);
                        } else if (dragData.origin === 'insideBoard') {
                            // Find ship, remove from board, place on board
                            droppedFromInsideBoard(dragData, player, e, players, renderGameBoards);
                        }
                    })
                }

                // Conditions for displaying ships
                if (column && player.isHuman && (playerVsComputer || !player.isReady)) {
                    tile.classList.add('ship')
                }

                // Conditions for allowing attack on tile
                const ready = players.every((p) => p.isReady)
                if (ready && !player.myTurn && player.board.isAttackable([rowIndex, columnIndex]) && (!player.isHuman || !playerVsComputer) && !gameOver) {
                    const coordinate = [rowIndex, columnIndex]
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
            const tile = document.getElementById(`p${index + 1}-${row}-${column}`);
            tile.classList.add('hit');
        })
        missedCoordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            const tile = document.getElementById(`p${index + 1}-${row}-${column}`);
            tile.classList.add('missed');
        })
    })
}

export default async function startGame(players) {
    renderGameBoards(players)
    const battleShipContainer = document.querySelector('.battleship-container');
    battleShipContainer.classList.remove('removed');

    const [player1, player2] = players
    createRandomShipPlacementButton(player1, players, renderGameBoards)
    createDraggableShipElements(player1, players, renderGameBoards)
    await finishedPlacingShips(player1)
    renderGameBoards(players)

    if (player2.isHuman) {
        createRandomShipPlacementButton(player2, players, renderGameBoards)
        createDraggableShipElements(player2, players, renderGameBoards)
        await finishedPlacingShips(player2);
    } else {
        randomShipPlacement(player2, players, renderGameBoards)
        player2.readyUp();
    }
    renderGameBoards(players)
}