import { Link } from "react-router-dom"
import React from "react"
import styles from "./styles.module.css"

function Login() {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#d8ffc9ff";
  })

  return (
    <div>
      <h1 className={styles.title}>Login Page</h1>
      <p className={styles.description}>Shows a form to login the user</p>
      <Link className={styles.link} to={"/"}>Home</Link>
    </div>
  )
}

export default Login