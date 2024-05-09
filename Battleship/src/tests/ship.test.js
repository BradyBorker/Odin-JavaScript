import ship from "../ship";

test('create Ship object', () => {
    const newShip = ship();
    expect(newShip).toEqual({})
})