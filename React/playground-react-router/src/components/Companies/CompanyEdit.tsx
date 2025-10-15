import React, { type FormEvent } from "react";
import * as ReactRouterDOM from "react-router-dom"
import { editCompany } from "../../services/companies";
import styles from "../styles.module.css"

type Company = {
  id: number;
  name: string;
  description: string;
};

function CompanyEdit() {
  const company = ReactRouterDOM.useLoaderData() as Company;

  const navigate = ReactRouterDOM.useNavigate();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [updatedCompany, setUpdatedCompany] = React.useState<Company | null>(null)

  React.useEffect(() => {
    if (company) {
      setName(company.name);
      setDescription(company.description);
    }
  }, [company]);

  function handleEdit(event: FormEvent) {
    event.preventDefault()

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
      <h1 className={styles.subtitle}>Edit Company</h1>
      <form className={styles.form}>
        <label className={styles.label}>
          <strong>Name:</strong>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className={styles.label}>
          <strong>Description:</strong>
          <textarea
            value={description}
            className={styles.textarea}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            cols={40}
            placeholder="Write a short description..."
          />
        </label>

        <button className={styles.button} type="button" onClick={handleEdit}>Edit</button>
      </form>
    </div>
  );
}

export default CompanyEdit;
