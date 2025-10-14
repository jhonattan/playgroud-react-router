import { useEffect } from "react";
import {
  Form,
  Link,
  useLoaderData,
  useLocation,
  useNavigation,
} from "react-router-dom";

type Game = {
  id: number;
  name: string;
  description: string;
};

function GameDetail() {
  const location = useLocation();

  const game = useLoaderData() as Game;
  const navigation = useNavigation();

  console.log(navigation.state);

  useEffect(() => {
    const updatedGame = location.state?.updatedGame;

    if (updatedGame) {
      game.name = updatedGame.name;
      game.description = updatedGame.description;
    }
  }, [location.state]);

  if (!game) return <div>Game not found</div>;

  if (navigation.state === "loading") {
    return <div>Loading Game...</div>;
  }

  return (
    <div>
      <h1>Games detail</h1>
      <p>Details for game {game.name}</p>

      <>
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

        <Form method="post" action="destroy">
          <button type="submit">Delete</button>
        </Form>
      </>
    </div>
  );
}

export default GameDetail;
