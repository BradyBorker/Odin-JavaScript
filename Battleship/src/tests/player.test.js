import { human, computer } from "../player";

test('Human player is defined', () => {
    const newHuman = human();
    expect(newHuman).toBeDefined();
})

test('Computer player is defined', () => {
    const newComputer = computer();
    expect(newComputer).toBeDefined();
})