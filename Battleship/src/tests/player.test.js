import { human, computer } from "../player";

test("Human player is defined", () => {
  const newHuman = human();
  expect(newHuman).toBeDefined();
});

test("Computer player is defined", () => {
  const newComputer = computer();
  expect(newComputer).toBeDefined();
});

test("Human switchTurn function reverses boolean value", () => {
  const newHuman = human(true);
  expect(newHuman.myTurn).toBeTruthy();
  newHuman.switchTurn();
  expect(newHuman.myTurn).toBeFalsy();
  newHuman.switchTurn();
  expect(newHuman.myTurn).toBeTruthy();
});

test("Computer switchTurn function reverses boolean value", () => {
  const newComputer = computer(true);
  expect(newComputer.myTurn).toBeTruthy();
  newComputer.switchTurn();
  expect(newComputer.myTurn).toBeFalsy();
  newComputer.switchTurn();
  expect(newComputer.myTurn).toBeTruthy();
});

test("readyUp function sets isReady to true", () => {
  const newHuman = human();
  expect(newHuman.isReady).toBeFalsy();
  newHuman.readyUp();
  expect(newHuman.isReady).toBeTruthy();
  newHuman.readyUp();
  expect(newHuman.isReady).toBeTruthy();
});
