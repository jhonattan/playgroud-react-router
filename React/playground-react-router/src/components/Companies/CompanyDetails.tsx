import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { getStoredData } from "../../services/storedData";

type Company = {
  id: number,
  name: string,
  description: string
}

function CompanyDetails() {
  const company = useLoaderData() as Company
  const [updatedCompany, setUpdatedCompany] = React.useState<Company | null>(null)

  React.useEffect(() => {
    const storedUpdatedCompany = getStoredData(company.id, "Company")
    const updatedCompany = storedUpdatedCompany ? { ...company, ...storedUpdatedCompany } : company

    setUpdatedCompany(updatedCompany)
  }, [company])

  if (!company) return

  return (
    <div>
      <h1>Company Page</h1>
      <ul>
        <li><strong>Id:</strong> {company.id}</li>
        <li><strong>Name:</strong> {updatedCompany?.name}</li>
        <li><strong>Description:</strong> {updatedCompany?.description}</li>
      </ul>

      <Link to={"edit"}>Edit</Link>
    </div>
  )
}

export default CompanyDetails