export default function ship(length, orientation = "vertical") {
  const hitCoordinates = [];

  const hit = (coordinate) => {
    hitCoordinates.push(coordinate);
    return hitCoordinates;
  };

  const isSunk = () => length - hitCoordinates.length <= 0;

  return { length, orientation, hitCoordinates, hit, isSunk };
}
