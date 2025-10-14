import * as React from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getCompany } from "./services/companies";

type Companie = {
  id: number;
  name: string;
  description: string;
};

export default function CompanyEdit(){

    const {companieId} = useParams <{companieId: string}>()

    const navigate = useNavigate();
    
    const [company, setCompany] = React.useState<Companie | null>(null);
    
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("")

    React.useEffect(()=>{
        if(companieId){
            getCompany(parseInt(companieId)).then((companyData)=>{
                const company = companyData as Companie
                setCompany(company)
                setName(company.name)
                setDescription(company.description)
            })
        }
    }, [companieId])

    const handleEdit = ()=>{
        if (company){
            const updatedCompany = {
                ...company,
                name,
                description,
            };
            navigate(`/companies/${company.id}`,{state:{updatedCompany}})
        }
    }

    return(
        <>
         <div>
      <h1>Edit Game</h1>
      <div>
        <label>
          <strong>Id:</strong>
          <input type="text" value={company?.id} disabled />
        </label>
      </div>
      <div>
        <label>
          <strong>Name:</strong>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <strong>Description:</strong>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>

      <div>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
        </>
    )
}