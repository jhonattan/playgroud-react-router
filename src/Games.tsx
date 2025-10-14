import { useEffect } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useLocation,
} from "react-router-dom";

import s from "./games.module.css";

type Game = {
  id: number;
  name: string;
  description: string;
};

function Games() {
  const games = useLoaderData() as Game[];

  const location = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor = "#407dc4ff";

    const updatedGame = location.state?.updatedGame;

    if (updatedGame) {
      games.map((game) =>
        game.id === updatedGame.id ? (game.name = updatedGame.name) : game
      );
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [location.state]);

  return (
    <div>
      <h1>Games page</h1>
      <p>Shows a list of games</p>

      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <NavLink
              className={({ isActive }) => (isActive ? s.active : "")}
              to={`/games/${game.id}`}
            >
              {game.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />

      <Link to="/">Home</Link>
    </div>
  );
}

export default Games;
