import React from "react";
import { Link, Form } from "react-router-dom";
import * as ReactRouterDOM from "react-router-dom"
import { getStoredCompany } from "../../services/companies";
import styles from "../styles.module.css"

type Company = {
  id: number,
  name: string,
  description: string
}

function CompanyDetails() {
  const company = ReactRouterDOM.useLoaderData() as Company
  const [updatedCompany, setUpdatedCompany] = React.useState<Company | null>(null)

  React.useEffect(() => {
    const storedUpdatedCompany = getStoredCompany(company.id, "EditedCompany")
    const updatedCompany = storedUpdatedCompany ? { ...company, ...storedUpdatedCompany } : company

    setUpdatedCompany(updatedCompany)
  }, [company])

  if (!company) return

  return (
    <div>
      <h1 className={styles.subtitle}>Company Page</h1>
      <ul className={styles.list}>
        <li className={styles.item}><strong>Id:</strong> {company.id}</li>
        <li className={styles.item}><strong>Name:</strong> {updatedCompany?.name}</li>
        <li className={styles.item}><strong>Description:</strong> {updatedCompany?.description}</li>
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

export default CompanyDetails