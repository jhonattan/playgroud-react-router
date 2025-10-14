import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import { getCompany } from "./services/companies";
import { useState } from "react";


//Tipo de empresa
type Company = {
  id: number;
  name: string;
  description: string;
};

// Loader para obtener los datos actuales
export async function loader({ params }: { params: any }) {
  console.log("params en edit:", params);
  const companyID = parseInt(params.companyID);
  const company = await getCompany(companyID);
  return company;
}

function CompanyEdit() {
  const company = useLoaderData() as Company;
  console.log("🧾 Datos cargados desde loader:", company);
  const navigate = useNavigate();

  // Creamos estados locales con los datos actuales
  const [name, setName] = useState(company.name);
  const [description, setDescription] = useState(company.description);


  // Simulación de envío
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const updatedCompany = {
      ...company,
      name,
      description,
    };
    navigate(`/companies/${company.id}`, {
      state: { updatedCompany },
    }); // vuelve al detalle
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Editar empresa</h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginLeft: "0.5rem" }}
            />
          </label>
        </div>

        <div style={{ marginTop: "0.5rem" }}>
          <label>
            Descripcion:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              style={{ width: "100%" }}
            />
          </label>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <button type="submit">Guardar</button>{" "}
          <Link to={`/companies/${company.id}`}>Cancelar</Link>
        </div>
      </Form>
    </div>
  );
}

export default CompanyEdit;