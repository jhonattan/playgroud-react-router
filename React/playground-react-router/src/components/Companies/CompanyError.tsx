import { useParams } from "react-router-dom"

function CompanyError() {
  const {companyId} = useParams<{ companyId: string }>()

  return (
    <div>
      <h1>Company not found</h1>
      <p>We couldn’t find any game with the ID <strong>{companyId}</strong>: Error 404 - Not found</p>
    </div>
  )
}

export default CompanyError