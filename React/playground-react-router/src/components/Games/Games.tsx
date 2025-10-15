import * as ReactRouterDOM from "react-router-dom"
import { Link, NavLink, Outlet } from "react-router-dom"
import { editGame, getStoredGame } from "../../services/games"
import React from "react"
import styles from "../styles.module.css"

type Game = {
  id: number,
  name: string,
  description: string
}

function Games() {
  const games = ReactRouterDOM.useLoaderData() as Game[]

  React.useEffect(() => {document.body.style.backgroundColor = "#c9fdffff"}, [])

  React.useEffect(() => {
    if (!games) return

    games.map(game => {
      const storedUpdatedGame = getStoredGame(game.id, "EditedGame")

      if (storedUpdatedGame) {
        const updatedGame = { ...game, ...storedUpdatedGame }
        editGame(updatedGame)
      }
    })
  }, [games])

  return (
    <div>
      <h1 className={styles.title}>Games page</h1>
      <p className={styles.description}>Shows a list of games</p>

      <ul className={styles.list}>
        {games?.map((game: Game) => {
          const storedUpdatedGame = getStoredGame(game.id, "EditedGame")
          const updatedGame = storedUpdatedGame ? { ...game, ...storedUpdatedGame } : game

          return (
            <li className={styles.item} key={game.id}>
              <NavLink 
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`} 
                to={`${game.id}`}>{updatedGame.name}
              </NavLink>
            </li>
          )
        })}
      </ul>

      <Outlet />

      <Link className={styles.link} to="/">Home</Link>
    </div>
  )
}

export default Games
