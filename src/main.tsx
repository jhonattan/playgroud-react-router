import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Login from "./Login.tsx";
import Games from "./Games.tsx";
import Companies from "./Companies.tsx";
import Error from "./Error.tsx";
import { getGame, getGames } from "./services/games.ts";
import GameDetail from "./GameDetail.tsx";
import GameEdit from "./GameEdit.tsx";

import { getCompanies, getCompany } from "./services/companies.ts";
import CompanyDetail from "./CompanyDetail.tsx";
import CompanyEdit from "./CompanyEdit.tsx";

//import "./index.css";

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
    children: [
      {
        path: ":gameId",
        Component: GameDetail,
        loader: async ({ params }) => {
          return await getGame(parseInt(params.gameId!));
        },
      },
      {
        path: ":gameId/edit",
        Component: GameEdit,
      },
    ],
  },
  {
    path: "/companies",
    Component: Companies,
    loader: async () => await getCompanies(),
    children: [
      {
        path: ":companyID",
        Component: CompanyDetail,
        loader: async ({ params }) => await getCompany(parseInt(params.companyID!)),
      },
      {
        path: ":companyID/edit",
        Component: CompanyEdit,
        loader: async ({ params }) => await getCompany(parseInt(params.companyID!)),
      }
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
