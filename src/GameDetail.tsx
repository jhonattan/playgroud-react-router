import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getGame } from "./services/games";

type Game = {
  id: number;
  name: string;
  description: string;
};

function GameDetail() {
  const { gameId } = useParams<{ gameId: string }>();

  console.log("gameId", gameId);

  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    if (gameId) {
      getGame(parseInt(gameId)).then((gameData) => {
        setGame(gameData as Game);
      });
    }
  }, [gameId]);

  return (
    <div>
      <h1>Games detail</h1>
      <p>Details for game {game?.name}</p>
      <ul>
        <li>
          <strong>Id:</strong> {game?.id}
        </li>
        <li>
          <strong>Name:</strong> {game?.name}
        </li>
        <li>
          <strong>Description:</strong> {game?.description}
        </li>
      </ul>

      <Link to="/">Home</Link>
    </div>
  );
}

export default GameDetail;
