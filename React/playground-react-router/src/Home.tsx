import { Link } from "react-router-dom"
import React from "react"
import styles from "./components/styles.module.css"

function Home() {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#faf6d8ff";
  })

  return (
    <div>
      <h1 className={styles.title}>Critics Home Page</h1>
      <p className={styles.description}>Honest reviews about Games and Companies</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to={"/login"}>Login</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to={"/games"}>Games</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to={"/companies"}>Companies</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to={"/*"}>Invalid Page</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
