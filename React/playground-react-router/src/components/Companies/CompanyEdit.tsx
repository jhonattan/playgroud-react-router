import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { editCompany } from "../../services/companies";

type Company = {
  id: number;
  name: string;
  description: string;
};

function CompanyEdit() {
  const company = useLoaderData() as Company;

  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [updatedCompany, setUpdatedCompany] = React.useState<Company | null>(null)

  React.useEffect(() => {
    if (company) {
      setName(company.name);
      setDescription(company.description);
    }
  }, [company]);

  function handleEdit() {
    if (company) {
      const updatedCompany = {
        ...company,
        name,
        description,
      };

      setUpdatedCompany(updatedCompany)
      editCompany(updatedCompany);

      navigate(`/companies/${company.id}`, { state: { company: updatedCompany } });
    }
  }

  React.useEffect(() => {
    if (updatedCompany) localStorage.setItem(`${updatedCompany.id}Company`, JSON.stringify(updatedCompany))
  }, [updatedCompany])

  if (!company) return

  return (
    <div>
      <h1>Edit Company</h1>
      <div>
        <label>
          <strong>Name:</strong>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <strong>Description:</strong>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            cols={40}
            placeholder="Write a short description..."
          />
        </label>

        <button type="button" onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
}

export default CompanyEdit;
