import gameBoard from "./gameBoard";

export default function player() {
    const board = gameBoard();

    return { board }
}

export function human() {
    const test = () => {

    }
    return { test, ...player() }
}

export function computer() {

}