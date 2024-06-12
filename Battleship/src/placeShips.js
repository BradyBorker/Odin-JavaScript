import { draggableFromOutside } from "./dragAndDrop";
import ship from "./ship";
import randomSvg from "../icons/random-svg.svg";

export default function finishedPlacingShips(player) {
  return new Promise((resolve) => {
    const readyUpButton = document.querySelector(".ready-up");
    readyUpButton.addEventListener("click", () => {
      readyUpButton.classList.add("removed");
      player.readyUp();
      const randomShipPlacementSvg = document.querySelector(
        ".random-ship-placement",
      );

      const battleShipContainer = document.querySelector(
        ".battleship-container",
      );
      battleShipContainer.removeChild(randomShipPlacementSvg);

      const readyUpButtonClone = readyUpButton.cloneNode(true);
      readyUpButton.parentNode.replaceChild(readyUpButtonClone, readyUpButton);
      resolve();
    });
  });
}

export function randomShipPlacement(player, players, renderGameBoards) {
  player.board.removePlacedShips();
  const shipOrientations = ["horizontal", "vertical"];

  [5, 4, 3, 3, 2].forEach((length) => {
    const placementPool = [];
    for (let row = 0; row < 10; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        placementPool.push([row, col]);
      }
    }

    const randomOrientation = shipOrientations[Math.round(Math.random())];
    let randomIndex = Math.floor(Math.random() * placementPool.length);
    while (
      !player.board.placeShip(
        ship(length, randomOrientation),
        placementPool[randomIndex],
      )
    ) {
      randomIndex = Math.floor(Math.random() * placementPool.length);
    }
  });

  if (player.isHuman && player.board.allShipsPlaced()) {
    const readyUpButton = document.querySelector(".ready-up");
    readyUpButton.classList.remove("removed");
  }

  renderGameBoards(players);
}

export function createRandomShipPlacementButton(
  player,
  players,
  renderGameBoards,
) {
  const randomShipPlacementSvg = document.createElement("img");
  randomShipPlacementSvg.src = randomSvg;
  randomShipPlacementSvg.classList.add("random-ship-placement");

  const battleShipContainer = document.querySelector(".battleship-container");
  battleShipContainer.prepend(randomShipPlacementSvg);

  randomShipPlacementSvg.addEventListener("click", () =>
    randomShipPlacement(player, players, renderGameBoards),
  );
  randomShipPlacementSvg.addEventListener("click", () => {
    const draggableShipsContainer = document.querySelector(
      ".draggable-ships-container",
    );
    while (draggableShipsContainer.firstChild) {
      draggableShipsContainer.removeChild(draggableShipsContainer.firstChild);
    }
  });
}

export function createDraggableShipElements(players, renderGameBoards) {
  const draggableShipsContainer = document.querySelector(
    ".draggable-ships-container",
  );
  [5, 4, 3, 3, 2].forEach((length) => {
    const shipContainerElement = document.createElement("div");
    shipContainerElement.classList.add("ship-container", `length-${length}`);
    shipContainerElement.setAttribute("draggable", "true");

    draggableFromOutside(
      shipContainerElement,
      draggableShipsContainer,
      players,
      renderGameBoards,
    );

    for (let index = 0; index < length; index += 1) {
      const shipBody = document.createElement("div");
      shipBody.classList.add("ship-body");
      shipContainerElement.appendChild(shipBody);
    }

    draggableShipsContainer.appendChild(shipContainerElement);
  });
}

export function switchShipOrientation(e, player, players, renderGameBoards) {
  const coordinate = e.target.id
    .split("-")
    .slice(-2)
    .map((number) => Number(number));
  const theShip = player.board.getShipAt(coordinate);
  const shipHeadCoordinate = player.board.getShipHeadCoordinate(theShip);
  const switchedOrientation =
    theShip.orientation === "vertical" ? "horizontal" : "vertical";

  const switchedShipCoordinates = player.board
    .getCoordsFromStartingCoord(
      shipHeadCoordinate,
      switchedOrientation,
      theShip.length,
    )
    .slice(1);
  if (player.board.validShipPlacement(switchedShipCoordinates)) {
    theShip.orientation = switchedOrientation;
    player.board.removePlacedShip(player.board.getShipCoordinates(theShip));
    player.board.placeShip(theShip, shipHeadCoordinate);

    renderGameBoards(players);
  }
}
