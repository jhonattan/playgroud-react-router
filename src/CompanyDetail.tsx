import { useLoaderData, useNavigation, useLocation, Link } from "react-router-dom";
import { getCompany } from "./services/companies";
import { useEffect } from "react";

// Tipo de empresa
type Company = {
  id: number;
  name: string;
  description: string;
};

// Loader que obtiene una empresa por su ID

export async function loader({ params }: { params: any }) {
  const companyID = parseInt(params.companyID);
  const company = await getCompany(companyID);
  console.log("🏢 Empresa cargada:", company);
  return company;
}

function CompanyDetail() {
  const company = useLoaderData() as Company;
  console.log("🎯 useLoaderData:", company);
  const navigation = useNavigation();
  const location = useLocation();


  useEffect(() => {
    const updatedCompany = location.state?.updatedCompany;
    if (updatedCompany) {
      company.name = updatedCompany.name;
      company.description = updatedCompany.description;
    }
  }, [location.state]);

  if (navigation.state === "loading") {
    return <div>Cargando empresa...</div>;
  }
  console.log("Renderizando CompanyDetail");

  return (
    <div>
      <h1>Company Detail</h1>
      <p>Details for {company.name}</p>

      <>
        <ul>
          <li>
            <strong>ID:</strong> {company.id}
          </li>
          <li>
            <strong>Name:</strong> {company.name}
          </li>
          <li>
            <strong>Description:</strong> {company.description}
          </li>
        </ul>

        <Link to={`/companies/${company.id}/edit`}>Editar</Link>

      </>
    </div>
  );
}

export default CompanyDetail;
