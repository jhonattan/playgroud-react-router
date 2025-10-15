import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Home
import Home from './Home.tsx'

// Login
import Login from './components/Login.tsx'

// Games
import Games from './components/Games/Games.tsx'
import GameDetails from './components/Games/GameDetails.tsx'
import GameEdit from './components/Games/GameEdit.tsx'
import { action as GameDeleteAction } from './components/Games/GameDelete.tsx'
import GameError from './components/Games/GameError.tsx'

// Companies
import Companies from './components/Companies/Companies.tsx'
import CompanyDetails from './components/Companies/CompanyDetails.tsx'
import CompanyEdit from './components/Companies/CompanyEdit.tsx'
import { action as CompanyDeleteAction } from './components/Companies/CompanyDelete.tsx'
import CompanyError from './components/Companies/CompanyError.tsx'

// Error
import Error from './components/Error.tsx'

// Games Functions
import { getGames, getGame } from './services/games.ts'

// Companies Functions
import { getCompanies, getCompany } from './services/companies.ts'

const router = createBrowserRouter([
  // Home
  { path: '/', element: <Home /> },

  // Login
  { path: '/login', element: <Login /> },

  // Games
  { 
    path: '/games', element: <Games />, loader: (async () => await getGames()), 
    children: [
      {
        path: ":gameId", element: <GameDetails />,
        loader: (async ({ params }) => {
          const {gameId} = params

          if (!gameId) throw new Response("Invalid ID", { status: 404 })
          
          const game = await getGame(Number(gameId))

          if (!game) throw new Response("Game not found", { status: 404 })
          
          return game
        }),
        errorElement: <GameError />
      },
      {
        path: ":gameId/edit", element: <GameEdit />,
        loader: (async ({ params }) => {
          const {gameId} = params
          if (!gameId) throw new Response("Invalid ID", { status: 404 })
          
          const game = await getGame(Number(gameId))  
          if (!game) throw new Response("Game not found", { status: 404 })
          
          return game
        })
      },
      {
        path: ":gameId/delete", action: GameDeleteAction
      }
    ]
  },

  // Companies
  { 
    path: '/companies', element: <Companies />, loader: (async () => await getCompanies()), 
    children: [
      { 
        path: ":companyId", element: <CompanyDetails />,
        loader: (async ({ params }) => {
          const {companyId} = params
          if (!companyId) throw new Response("Invalid ID", { status: 404 })

          const company = await getCompany(Number(companyId))  
          if (!company) throw new Response("Company not found", { status: 404 })

          return company
        }),
        errorElement: <CompanyError />
      },
      {
        path: ":companyId/edit", element: <CompanyEdit />,
        loader: (async ({ params }) => {
          const {companyId} = params
          if (!companyId) throw new Response("Invalid ID", { status: 404 })
          
          const company = await getCompany(Number(companyId))  
          if (!company) throw new Response("Company not found", { status: 404 })
          
          return company
        })
      },
      {
        path: ":companyId/delete", action: CompanyDeleteAction
      }
    ]
  },

  // Error
  { path: "*", element: <Error /> }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
