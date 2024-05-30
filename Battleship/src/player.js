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

    let initialHit = null;
    let hitHistory = [];
    let attackStack = [];
    const attack = function (opponent) {
        // Check to see if ship has sunk based on last attack
        if (initialHit) {
            const attackedShip = opponent.board.getShip(initialHit);
            if (attackedShip.isSunk()) {
                // const sunkShipCoordinates = opponent.board.getShipCoordinates(attackedShip).map((coordinate) => JSON.stringify(coordinate));
                const sunkShipCoordinates = attackedShip.hitCoordinates.map((hitCoordinate) => JSON.stringify(hitCoordinate));
                const remainingCoordinates = [];
                hitHistory.forEach((coordinate) => {
                    if (!sunkShipCoordinates.includes(coordinate)) {
                        remainingCoordinates.push(coordinate);
                    }
                })
                initialHit = null;
                hitHistory = remainingCoordinates;
                attackStack = [];
            }
            if (!initialHit && hitHistory.length >= 1) {
                initialHit = hitHistory.pop();
            }
        }

        if (initialHit && attackStack.length === 0) {
            const possibleAttacks = []
            possibleAttacks.push([initialHit[0], initialHit[1] + 1]);
            possibleAttacks.push([initialHit[0], initialHit[1] - 1]);
            possibleAttacks.push([initialHit[0] + 1, initialHit[1]]);
            possibleAttacks.push([initialHit[0] - 1, initialHit[1]]);
            possibleAttacks.forEach((possibleAttack) => {
                if (opponent.board.isAttackable(possibleAttack)) {
                    attackStack.pop(possibleAttack)
                }
            })
        } else if (initialHit && attackStack.length >= 1) {
            attackStack.splice(0, attackStack.length);
            const newHit = hitHistory[hitHistory.length - 1];
            const x1 = initialHit[1];
            const y1 = initialHit[0];
            const x2 = newHit[1];
            const y2 = newHit[0];

            const xDiff = x1 - x2;
            const yDiff = y1 - y2;

            if (xDiff < 0) {
                // left
                const leftOne = [newHit[0], newHit[1] - 1];
                if (opponent.board.isAttackable(leftOne)) {
                    attackStack.push(leftOne);
                }
            } else if (xDiff > 0) {
                // right
                const rightOne = [newHit[0], newHit[1] + 1];
                if (opponent.board.isAttackable(rightOne)) {
                    attackStack.push(rightOne);
                }
            } else if (yDiff < 0) {
                // up
                const upOne = [newHit[0] + 1, newHit[1]]
                if (opponent.board.isAttackable(upOne)) {
                    attackStack.push(upOne);
                }
            } else if (yDiff > 0) {
                // down
                const downOne = [newHit[0] - 1, newHit[1]];
                if (opponent.board.isAttackable(downOne)) {
                    attackStack.push(downOne);
                }
            }

        }

        if (attackStack.length > 0) {
            return attackStack.pop();
        } if (attackStack.length <= 0) {
            const attackPool = []
            for (let row = 0; row < 10; row += 1) {
                for (let col = 0; col < 10; col += 1) {
                    if (opponent.board.isAttackable([row, col])) {
                        attackPool.push([row, col]);
                    }
                }
            }

            const randomIndex = Math.floor(Math.random() * (attackPool.length - 1))
            const randomAttack = attackPool[randomIndex];
            return randomAttack
        }
        return false
    }

    const logAttack = (isHit, coordinate) => {
        if (isHit && !initialHit) {
            initialHit = coordinate;
            hitHistory.push(JSON.stringify(coordinate));
        } else if (isHit) {
            hitHistory.push(JSON.stringify(coordinate));
        }
    }

    return { ...player(), attack, switchTurn, logAttack, isHuman, myTurn, name }
}