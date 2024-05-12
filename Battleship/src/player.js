import gameBoard from "./gameBoard";

function player() {
    const board = gameBoard();

    return { board }
}

export function human(myTurn = false) {
    const isHuman = true;

    return { ...player(), isHuman, myTurn }
}

export function computer(myTurn = false) {
    const isHuman = false;

    return { ...player(), isHuman, myTurn }
}