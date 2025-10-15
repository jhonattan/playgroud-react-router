import * as ReactRouterDOM from "react-router-dom"
import { NavLink, Link, Outlet } from "react-router-dom"
import { editCompany } from "../../services/companies"
import { getStoredData } from "../../services/storedData"
import styles from "../styles.module.css"
import React from "react"

type Company = {
  id: number,
  name: string,
  description: string
}

function Companies() {
  const companies = ReactRouterDOM.useLoaderData() as Company[]

  React.useEffect(() => {document.body.style.backgroundColor = "#dcc9ffff"}, [])

  React.useEffect(() => {
    if (!companies) return

    companies.map(company => {
      const storedUpdatedCompany = getStoredData(company.id, "Company")

      if (storedUpdatedCompany) {
        const updatedCompany = {...company, ...storedUpdatedCompany}
        editCompany(updatedCompany)
      }
    })
  }, [companies])

  return (
    <div>
      <h1 className={styles.title}>Companies page</h1>
      <p className={styles.description}>Shows a list of companies</p>
      <ul className={styles.list}>
        {companies?.map((company: Company) => {
          const storedUpdatedCompany = getStoredData(company.id, "Company")
          
          const updatedCompany = storedUpdatedCompany ? {...company, ...storedUpdatedCompany} : company

          return (
            <li className={styles.item} key={company.id}>
              <NavLink 
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
                to={`${company.id}`}>{updatedCompany.name}
              </NavLink>
            </li>
          )
        })}
      </ul>

      <Outlet />

      <Link className={styles.link} to={"/"}>Home</Link>
    </div>
  )
}

export default Companies