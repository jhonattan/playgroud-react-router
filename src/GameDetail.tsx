import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getGame } from "./services/games";

type Game = {
  id: number;
  name: string;
  description: string;
};

function GameDetail() {
  const { gameId } = useParams<{ gameId: string }>();

  const location = useLocation();

  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const updatedGame = location.state?.updatedGame;

    if (updatedGame) {
      setGame(updatedGame);
      return;
    } else if (gameId) {
      getGame(parseInt(gameId)).then((gameData) => {
        setGame(gameData as Game);
      });
    }
  }, [gameId, location.state]);

  if (!game) return <div>Game not found</div>;

  return (
    <div>
      <h1>Games detail</h1>
      <p>Details for game {game.name}</p>
      <ul>
        <li>
          <strong>Id:</strong> {game.id}
        </li>
        <li>
          <strong>Name:</strong> {game.name}
        </li>
        <li>
          <strong>Description:</strong> {game.description}
        </li>
      </ul>

      <Link to={`/games/${game.id}/edit`}>Edit</Link>
    </div>
  );
}

export default GameDetail;
