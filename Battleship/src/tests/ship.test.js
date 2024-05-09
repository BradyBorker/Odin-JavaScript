import ship from "../ship";

test('Return length of the ship', () => {
    expect(ship(4).length).toBe(4);
})

test('Call hit on ship', () => {
    const newShip = ship(4);
    expect(newShip.hit()).toBe(1);
    expect(newShip.hit()).toBe(2);
})

test('Call isSunk on ship', () => {
    const newShip = ship(2);
    expect(newShip.isSunk()).toBe(false)

    newShip.hit()
    expect(newShip.isSunk()).toBe(false)

    newShip.hit()
    expect(newShip.isSunk()).toBe(true)
})