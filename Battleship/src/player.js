/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import gameBoard from "./gameBoard";

function player() {
  const board = gameBoard();

  const isReady = false;
  const readyUp = function () {
    this.isReady = true;
  };

  const switchTurn = function () {
    this.myTurn = !this.myTurn;
  };

  return { readyUp, switchTurn, board, isReady };
}

export function human(myTurn = false) {
  const name = myTurn ? "Player 1" : "Player 2";
  const isHuman = true;

  return { ...player(), isHuman, myTurn, name };
}

export function computer(myTurn = false) {
  const name = "Player 2";
  const isHuman = false;

  let initialHit = null;
  let previousAttackHit = false;
  let hitHistory = [];
  let attackStack = [];
  const attack = function (opponent) {
    if (initialHit) {
      const attackedShip = opponent.board.getShipAt(initialHit);
      if (attackedShip.isSunk()) {
        const sunkShipCoordinates = attackedShip.hitCoordinates.map(
          (hitCoordinate) => JSON.stringify(hitCoordinate),
        );
        const remainingCoordinates = [];
        hitHistory.forEach((coordinate) => {
          if (!sunkShipCoordinates.includes(JSON.stringify(coordinate))) {
            remainingCoordinates.push(coordinate);
          }
        });
        hitHistory = remainingCoordinates;
        attackStack = [];
        previousAttackHit = false;

        if (hitHistory.length >= 1) {
          initialHit = hitHistory.pop();
        } else {
          initialHit = null;
        }
      }
    }

    if (initialHit && attackStack.length <= 0) {
      const possibleAttacks = [];
      possibleAttacks.push([initialHit[0], initialHit[1] + 1]);
      possibleAttacks.push([initialHit[0], initialHit[1] - 1]);
      possibleAttacks.push([initialHit[0] + 1, initialHit[1]]);
      possibleAttacks.push([initialHit[0] - 1, initialHit[1]]);

      possibleAttacks.forEach((possibleAttack) => {
        if (opponent.board.isAttackable(possibleAttack)) {
          attackStack.push(possibleAttack);
        }
      })

      if (hitHistory.length > 0 && attackStack.length <= 0) {
        // Maybe instead:
        // If all sides surrounded + 1 until valid placements?
        console.log('Inside')
        let upOne = [initialHit[0] - 1, initialHit[1]];
        while (opponent.board.isHitAt(upOne) && !opponent.board.getShipAt(upOne).isSunk()) {
          upOne = [upOne[0] - 1, upOne[1]];
        }
        if (!opponent.board.isMissedAt(upOne)) {
          attackStack.push(upOne);
        }


        /* const relatedPieces = { column: [], row: [] }
        hitHistory.forEach((previousHit) => {
          if (initialHit[0] === previousHit[0]) {
            relatedPieces.row.push(previousHit)
          }
          if (initialHit[1] === previousHit[1]) {
            relatedPieces.column.push(previousHit)
          }
        })

        
        Sort by row:
        const coords = [[7, 3], [6, 3], [5,3], [8,3]]
        coords.sort((a, b) => a[0] - b[0])
          [[5, 3], [6, 3], [7, 3], [8, 3]]
        

        if (relatedPieces.column.length >= relatedPieces.row.length) {
          relatedPieces.column.sort((a, b) => a[0] - b[0]);
          console.log(relatedPieces.column)
          const beginningCoord = relatedPieces.column[0];
          const endCoord = relatedPieces.column[relatedPieces.column.length - 1];

          possibleAttacks.push([beginningCoord[0] - 1, beginningCoord[1]]);
          possibleAttacks.push([endCoord[0] + 1, endCoord[1]]);
          possibleAttacks.forEach((possibleAttack) => {
            if (opponent.board.isAttackable(possibleAttack)) {
              attackStack.push(possibleAttack);
            }
          })
        } else if (relatedPieces.row.length > relatedPieces.column.length) {
          relatedPieces.row.sort((a, b) => a[1] - b[1]);
          console.log(relatedPieces.row)
          const beginningCoord = relatedPieces.row[0];
          const endCoord = relatedPieces.row[relatedPieces.row.length - 1];

          possibleAttacks.push([beginningCoord[0], beginningCoord[1] - 1]);
          possibleAttacks.push([endCoord[0], endCoord[1] + 1]);
          possibleAttacks.forEach((possibleAttack) => {
            if (opponent.board.isAttackable(possibleAttack)) {
              attackStack.push(possibleAttack);
            }
          })
        }
        */
      }


    }

    if (initialHit && previousAttackHit) {
      const lastHit = hitHistory[hitHistory.length - 1];
      const x1 = initialHit[1];
      const y1 = initialHit[0];
      const x2 = lastHit[1];
      const y2 = lastHit[0];

      const xDiff = x1 - x2;
      const yDiff = y1 - y2;

      if (xDiff < 0) {
        // right
        const rightOne = [lastHit[0], lastHit[1] + 1];
        if (opponent.board.isAttackable(rightOne)) {
          attackStack.push(rightOne);
        }
      } else if (xDiff > 0) {
        // left
        const leftOne = [lastHit[0], lastHit[1] - 1];
        if (opponent.board.isAttackable(leftOne)) {
          attackStack.push(leftOne);
        }
      } else if (yDiff < 0) {
        // up
        const upOne = [lastHit[0] + 1, lastHit[1]];
        if (opponent.board.isAttackable(upOne)) {
          attackStack.push(upOne);
        }
      } else if (yDiff > 0) {
        // down
        const downOne = [lastHit[0] - 1, lastHit[1]];
        if (opponent.board.isAttackable(downOne)) {
          attackStack.push(downOne);
        }
      }
    }

    if (attackStack.length > 0) {
      const attackCoord = attackStack.pop()

      return attackCoord;
    }

    if (attackStack.length <= 0) {
      const attackPool = [];
      for (let row = 0; row < 10; row += 1) {
        for (let col = 0; col < 10; col += 1) {
          if (opponent.board.isAttackable([row, col])) {
            attackPool.push([row, col]);
          }
        }
      }

      const randomIndex = Math.floor(Math.random() * (attackPool.length - 1));
      const randomAttack = attackPool[randomIndex];
      return randomAttack;
    }
    return false;
  };

  const logAttack = (isHit, coordinate) => {
    if (isHit && !initialHit) {
      initialHit = coordinate;
      previousAttackHit = true;
    } else if (isHit) {
      hitHistory.push(coordinate);
      previousAttackHit = true;
    } else {
      previousAttackHit = false;
    }
  };

  return { ...player(), attack, logAttack, isHuman, myTurn, name };
}
