import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Login from "./Login.tsx";
import Games from "./Games.tsx";
import Companies from "./Companies.tsx";
import Error from "./Error.tsx";
import { getGames } from "./services/games.ts";
import GameDetail from "./GameDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/games",
    Component: Games,
    loader: async () => {
      return await getGames();
    },
  },
  {
    path: "/games/:gameId",
    Component: GameDetail,
  },
  {
    path: "/companies",
    Component: Companies,
  },
  {
    path: "*",
    Component: Error,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
