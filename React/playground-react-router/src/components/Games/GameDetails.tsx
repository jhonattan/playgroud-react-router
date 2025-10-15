import React from "react"
import * as ReactRouterDOM from "react-router-dom"
import { Link, Form } from "react-router-dom"
import { getStoredGame } from "../../services/games"
import styles from "../styles.module.css"

type Game = {
  id: number,
  name: string,
  description: string
}

function GameDetails() {
  const game = ReactRouterDOM.useLoaderData() as Game
  const [updatedGame, setUpdatedGame] = React.useState<Game | null>(null)

  React.useEffect(() => {
    const storedUpdatedGame = getStoredGame(game.id, "EditedGame")
    const updatedGame = storedUpdatedGame ? { ...game, ...storedUpdatedGame } : game

    setUpdatedGame(updatedGame)
  }, [game])

  return (
    <div>
      <h1 className={styles.subtitle}>Game Page</h1>
      <ul className={styles.list}>
        <li className={styles.item}><strong>Id:</strong> {game.id}</li>
        <li className={styles.item}><strong>Name:</strong> {updatedGame?.name}</li>
        <li className={styles.item}><strong>Description:</strong> {updatedGame?.description}</li>
      </ul>

      <div className={styles.link__container}>
        <Link className={styles.link} to={"edit"}>Edit</Link>
        <Form method="post" action="delete">
          <button className={styles.button} type="submit">Delete</button>
        </Form>
      </div>
    </div>
  )
}

export default GameDetails