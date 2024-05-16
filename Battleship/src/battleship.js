/* eslint-disable no-use-before-define */
import placedShips, { randomShipPlacement } from "./placeShips";

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
        attackingPlayer.logAttack(attackedPlayer.board.receiveAttack(coordinate), coordinate)
    } else {
        attackedPlayer.board.receiveAttack(coordinate)
    }

    switchTurn(players)
    renderGameBoards(players)
    if (isGameOver(players)) {
        renderGameBoards(players, true)
        return
    }

    [attackingPlayer] = players.filter((player) => player.myTurn);
    [attackedPlayer] = players.filter((player) => !player.myTurn);
    if (!attackingPlayer.isHuman) {
        const attackCoordinate = attackingPlayer.attack(attackedPlayer);
        makeAttack(players, attackCoordinate);
    }
}

function renderGameBoards(players, gameOver = false) {
    const [player1, player2] = players
    const playerVsComputer = !(player1.isHuman && player2.isHuman)

    players.forEach((player, index) => {
        const boardNode = document.querySelector(`.player${index + 1}-board`);
        const hitCoordinates = player.board.hitAttacks;
        const missedCoordinates = player.board.missedAttacks;
        const tiles = [];

        player.board.state.forEach((row, rowIndex) => {
            row.forEach((column, columnIndex) => {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                tile.id = `${index + 1}-${rowIndex}-${columnIndex}`
                if (column && player.isHuman && playerVsComputer) {
                    tile.classList.add('ship')
                }

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
            const tile = document.getElementById(`${index + 1}-${row}-${column}`);
            tile.classList.add('hit');
        })
        missedCoordinates.forEach((coordinate) => {
            const [row, column] = coordinate;
            const tile = document.getElementById(`${index + 1}-${row}-${column}`);
            tile.classList.add('missed');
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

export default async function startGame(players, ship) {
    /*
    Order of Events:
    0. TODO: Display board, then allow move to board, then readyUp
    1. Add to board
    2. Display board
    3. Ready Up
    4. Begin action
    */
    renderGameBoards(players)
    const battleShipContainer = document.querySelector('.battleship-container');
    battleShipContainer.classList.remove('removed');
    // Add random ship button
    // TODO: Show Ready Up button once all ships have been placed
    const [player1, player2] = players
    randomShipPlacement(players, player1, ship, renderGameBoards)
    await placedShips(player1)
    // staticShipPlacements(player1, ship);
    // player1.readyUp();
    staticShipPlacements(player2, ship);
    player2.readyUp();

    renderGameBoards(players)
    // # TODO: Begin rounds, render after each round
}