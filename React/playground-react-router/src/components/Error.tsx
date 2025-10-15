import { Link } from "react-router-dom"
import React from "react"
import styles from "./styles.module.css"

function Error() {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#ffc9c9ff";
  })

  return (
    <div>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.description}>We couldn’t find any page with that URL: Error 404 - Not found</p>
      <Link className={styles.link} to={"/"}>Home</Link>
    </div>
  )
}

export default Error