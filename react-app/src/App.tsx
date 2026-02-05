import { useState } from "react";
import "./App.css";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
    console.log(game.player.name);
  };

  return (
    <div>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
