import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Login from "./Login.tsx";
import Games from "./Games.tsx";
import Companies from "./Companies.tsx";
import Error from "./Error.tsx";
import { getGames } from "./services/games.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/games",
    element: <Games />,
    loader: async () => {
      return await getGames();
    },
  },
  {
    path: "/companies",
    element: <Companies />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
