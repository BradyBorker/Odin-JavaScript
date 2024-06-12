import ship from "../ship";

test("Return length of the ship", () => {
  expect(ship(4).length).toBe(4);
});

test("Call hit on ship", () => {
  const newShip = ship(4);
  expect(newShip.hit([0, 0])).toEqual([[0, 0]]);
  expect(newShip.hit([0, 1])).toEqual([
    [0, 0],
    [0, 1],
  ]);
});

test("Call isSunk on ship", () => {
  const newShip = ship(2);
  expect(newShip.isSunk()).toBe(false);

  newShip.hit(1);
  expect(newShip.isSunk()).toBe(false);

  newShip.hit(2);
  expect(newShip.isSunk()).toBe(true);
});
