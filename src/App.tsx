import { useEffect } from "react";
import * as C from "./App.styles";
import Character from "./components/character";
import useCharacter from "./hookes/useCharacter";

const App = () => {
  const char = useCharacter();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        char.movieLeft();
        break;
      case "KeyW":
      case "ArrowUp":
        char.movieUp();
        break;
      case "KeyD":
      case "ArrowRight":
        char.movieRight();
        break;
      case "KeyS":
      case "ArrowDown":
        char.movieDown();
        break;
    }
  };
  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} />
      </C.Map>
    </C.Container>
  );
};

export default App;
