import { useEffect } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

type Game = {
  id: number;
  name: string;
  description: string;
};

function Games() {
  //const [games, setGames] = useState<Game[]>([]);
  const games = useLoaderData() as Game[];

  useEffect(() => {
    //monta el componente en la pagina
    document.body.style.backgroundColor = "#407dc4ff";

    // getGames().then((gamesData) => {
    //   setGames(gamesData as Game[]);
    // });

    //desmonta el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>Games page</h1>
      <p>Shows a list of games</p>

      <ul>
        {games?.map((game) => (
          <li key={game.id}>
            <Link to={`/games/${game.id}`}>{game.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />

      <Link to="/">Home</Link>
    </div>
  );
}

export default Games;
