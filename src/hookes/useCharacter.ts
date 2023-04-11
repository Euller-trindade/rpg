import { useState } from "react";
import { CharacterSides } from "../types/CharacterSides";
import { mapSpots } from "../data/mapSpots";

const useCharacter = () => {
  const [pos, setPos] = useState({ x: 3, y: 15 });
  const [side, setSide] = useState<CharacterSides>("down");

  const movieLeft = () => {
    setPos((pos) => ({
      x: canMovie(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
      y: pos.y,
    }));
    setSide("left");
  };
  const movieRight = () => {
    setPos((pos) => ({
      x: canMovie(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
      y: pos.y,
    }));
    setSide("right");
  };
  const movieDown = () => {
    setPos((pos) => ({
      x: pos.x,
      y: canMovie(pos.x, pos.y + 1) ? pos.y + 1 : pos.y,
    }));
    setSide("down");
  };
  const movieUp = () => {
    setPos((pos) => ({
      x: pos.x,
      y: canMovie(pos.x, pos.y - 1) ? pos.y - 1 : pos.y,
    }));

    setSide("up");
  };

  const canMovie = (x: number, y: number) => {
    if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
      return mapSpots[y][x] === 1;
    }

    return false;
  };

  return {
    x: pos.x,
    y: pos.y,
    side,
    movieDown,
    movieUp,
    movieLeft,
    movieRight,
  };
};

export default useCharacter;
