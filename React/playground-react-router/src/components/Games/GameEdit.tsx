import React, { type FormEvent } from "react"
import * as ReactRouterDOM from "react-router-dom"
import { editGame } from "../../services/games"
import styles from "../styles.module.css"

type Game = {
  id: number,
  name: string,
  description: string
}

function GameEdit() {
  const game = ReactRouterDOM.useLoaderData() as Game
  
  const navigate = ReactRouterDOM.useNavigate()

  const [name, setName] = React.useState("") 
  const [description, setDescription] = React.useState("")
  const [updatedGame, setUpdatedGame] = React.useState<Game | null>(null)

  React.useEffect(() => {
    setName(game.name)
    setDescription(game.description)
  }, [game])
  
  function handleEdit(event: FormEvent) {
    event.preventDefault()

    if (game) {
      const updatedGame = {
        ...game,
        name,
        description
      }

      setUpdatedGame(updatedGame)
      editGame(updatedGame)

      navigate(`/games/${game.id}`, { state: { game: updatedGame }})
    }
  }

  function handleCancel(event: FormEvent) {
    event.preventDefault()

    navigate(-1)
  }

  React.useEffect(() => {
    if (updatedGame) localStorage.setItem(`${updatedGame.id}EditedGame`, JSON.stringify(updatedGame))
  }, [updatedGame])

  if (!game) return

  return (
    <div>
      <h1 className={styles.subtitle}>Game Edit Game</h1>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="">
          <strong>Name:</strong>
          <input 
            type="text" 
            className={styles.input}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className={styles.label} htmlFor="">
          <strong>Description:</strong>
          <textarea 
            value={description}
            className={styles.textarea}
            onChange={e => setDescription(e.target.value)}
            rows={4}
            cols={40}
            placeholder="Write a short description..."
          />
        </label>
        <div className={styles.button__container}>
          <button className={styles.button} type="button" onClick={handleEdit}>Edit</button>
          <button className={styles.button} type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default GameEdit