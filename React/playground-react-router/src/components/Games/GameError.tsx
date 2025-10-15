import * as ReactRouterDOM from "react-router-dom"
import styles from "../styles.module.css"

function GameError() {
  const { gameId } = ReactRouterDOM.useParams<{ gameId: string }>()

  return (
    <div>
      <h1 className={styles.subtitle}>Game not found</h1>
      <p className={styles.description}>We couldn’t find any game with the ID <strong>{gameId}</strong>: Error 404 - Not found</p>
    </div>
  )
}

export default GameError