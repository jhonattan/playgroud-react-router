import { useLoaderData, Link, Outlet } from "react-router-dom"
import { editCompany } from "../../services/companies"
import { getStoredData } from "../../services/storedData"
import React from "react"

type Company = {
  id: number,
  name: string,
  description: string
}

function Companies() {
  const companies = useLoaderData() as Company[]

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
      <h1>Companies page</h1>
      <p>Shows a list of companies</p>
      <ul>
        {companies?.map((company: Company) => {
          const storedUpdatedCompany = getStoredData(company.id, "Company")
          
          const updatedCompany = storedUpdatedCompany ? {...company, ...storedUpdatedCompany} : company

          return (
            <li key={company.id}>
              <Link to={`${company.id}`}>{updatedCompany.name}</Link>
            </li>
          )
        })}
      </ul>

      <Outlet />

      <Link to={"/"}>Home</Link>
    </div>
  )
}

export default Companies