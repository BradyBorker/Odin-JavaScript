import gameBoard from "./gameBoard";

function player() {
    const board = gameBoard();

    return { board }
}

export function human() {
    return { ...player() }
}

export function computer() {
    return { ...player() }
}