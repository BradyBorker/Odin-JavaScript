import { human, computer } from "./player";
import displayMenu from "./menu";
import startGame from "./battleship";
import "./style.css";

const playAgainButton = document.querySelector(".play-again");
playAgainButton.addEventListener("click", async () => {
  document.querySelector(".battleship-container").classList.add("removed");
  document.querySelector(".gameover-modal").classList.add("removed");
  document.querySelector("body").classList.remove("game-background");
  document.querySelector("body").classList.add("menu-background");

  const player1Board = document.querySelector(".player1-board");
  while (player1Board.firstChild) {
    player1Board.removeChild(player1Board.firstChild);
  }

  const player2Board = document.querySelector(".player2-board");
  while (player2Board.firstChild) {
    player2Board.removeChild(player2Board.firstChild);
  }

  const draggableShipsContainer = document.querySelector(
    ".draggable-ships-container",
  );
  while (draggableShipsContainer.firstChild) {
    draggableShipsContainer.removeChild(draggableShipsContainer.firstChild);
  }

  startGame(await displayMenu(human, computer));
});

startGame(await displayMenu(human, computer));
