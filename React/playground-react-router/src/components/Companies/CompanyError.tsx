import * as ReactRouterDOM from "react-router-dom"
import styles from "../styles.module.css"

function CompanyError() {
  const {companyId} = ReactRouterDOM.useParams<{ companyId: string }>()

  return (
    <div>
      <h1 className={styles.subtitle}>Company not found</h1>
      <p className={styles.description}>We couldn’t find any game with the ID <strong>{companyId}</strong>: Error 404 - Not found</p>
    </div>
  )
}

export default CompanyError