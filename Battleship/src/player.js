/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import gameBoard from "./gameBoard";

function player() {
    const board = gameBoard();

    const isReady = false
    const readyUp = function () {
        this.isReady = true;
    }

    return { readyUp, board, isReady }
}
// TODO: Test switchTurn and readyUp

export function human(myTurn = false) {
    const name = myTurn ? 'Player 1' : 'Player 2'
    const isHuman = true;

    const switchTurn = function () {
        this.myTurn = !this.myTurn;
    }

    return { ...player(), switchTurn, isHuman, myTurn, name }
}

export function computer(myTurn = false) {
    const name = 'Player 2';
    const isHuman = false;

    const switchTurn = function () {
        this.myTurn = !this.myTurn;
    }

    let previousHit = null;
    const attackQueue = [];
    const attack = function (opponent) {
        if (previousHit) {
            for (let index = 1; index <= 4; index += 1) {
                attackQueue.push([])
            }
        }

        if (attackQueue.length > 0) {
            return attackQueue.shift();
        }

        const attackPool = []
        for (let row = 0; row < 10; row += 1) {
            for (let col = 0; col < 10; col += 1) {
                if (opponent.board.isAttackable([row, col])) {
                    attackPool.push([row, col]);
                }
            }
        }

        const randomIndex = Math.floor(Math.random() * (attackPool.length - 1))
        const randomCoordinate = attackPool[randomIndex];
        return randomCoordinate
    }

    const logAttack = (isHit, coordinate) => {
        if (isHit) {
            previousHit = coordinate;
        }
    }

    return { ...player(), attack, switchTurn, logAttack, isHuman, myTurn, name }
}