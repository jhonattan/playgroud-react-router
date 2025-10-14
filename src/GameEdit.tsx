import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGame } from "./services/games";

type Game = {
  id: number;
  name: string;
  description: string;
};

function GameEdit() {
  const { gameId } = useParams<{ gameId: string }>();

  const navigate = useNavigate();

  const [game, setGame] = useState<Game | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (gameId) {
      getGame(parseInt(gameId)).then((gameData) => {
        const game = gameData as Game;
        setGame(game);
        setName(game.name);
        setDescription(game.description);
      });
    }
  }, [gameId]);

  const handleEdit = () => {
    if (game) {
      const updatedGame = {
        ...game,
        name,
        description,
      };

      navigate(`/games/${game.id}`, { state: { updatedGame } });
    }
  };

  if (!game) return <div>Game not found</div>;

  return (
    <div>
      <h1>Edit Game</h1>
      <div>
        <label>
          <strong>Id:</strong>
          <input type="text" value={game.id} disabled />
        </label>
      </div>
      <div>
        <label>
          <strong>Name:</strong>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <strong>Description:</strong>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>

      <div>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>

        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default GameEdit;
