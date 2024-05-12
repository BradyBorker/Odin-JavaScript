import ship from "./ship";
import { human, computer } from "./player";
import displayMenu from "./menu";
import startGame from "./battleship";
import "./style.css";

/*
1. Menu screen (Player v Player, Player v Computer)
1a. New game vs load game feature
2. 
*/

// Called on refresh if there is nothing in local storage
// Or on 'Play again' button
startGame(await displayMenu(human, computer), ship)