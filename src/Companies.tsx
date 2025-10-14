import { useEffect } from "react";
import { Link, NavLink, Outlet, useLoaderData, useLocation } from "react-router-dom";
import { getCompanies } from "./services/companies";

// Tipo de empresa
type Company = {
  id: number;
  name: string;
  description: string;
};

// Loader para cargar los datos antes de renderizar

export async function loader() {
  const companies = await getCompanies();
  return companies;
}

function Companies() {
  const companies = useLoaderData() as Company[];
  const location = useLocation();

  useEffect(() => {
    //monta el componente en la pagina
    document.body.style.backgroundColor = "#4e5358ff";

    const updateCompany = location.state?.updateCompany;

    if (updateCompany) {
      companies.map((company) =>
        company.id === updateCompany.id
          ? (company.name = updateCompany.name)
          : company
      );
    }

    //desmonta el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [location.state]);

  console.log("Renderizando Companies");

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Companies</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            <NavLink
              to={`/companies/${company.id}`}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              {company.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />


      <Link to="/">Home</Link>
    </div>
  );
}
export default Companies;
