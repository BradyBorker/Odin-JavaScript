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
    const isHuman = true;

    const switchTurn = function () {
        this.myTurn = !this.myTurn;
    }

    return { ...player(), switchTurn, isHuman, myTurn }
}

export function computer(myTurn = false) {
    const isHuman = false;

    const switchTurn = function () {
        this.myTurn = !this.myTurn;
    }

    const previousAttacks = [];
    const attackQueue = [];
    const attack = function (opponent) {
        if (attackQueue.length > 0) {
            return attackQueue.pop();
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

    return { ...player(), attack, switchTurn, isHuman, myTurn }
}