import * as React from "react"
import { NavLink, useParams, useLocation } from "react-router-dom"
import { getCompany } from "./services/companies";

type Companie = {
  id: number;
  name: string;
  description: string;
};

export default function CompanientDetail(){

    const {companieId} = useParams <{companieId: string}>()

    const location = useLocation();

    const [companie, setCompanie] = React.useState <Companie | null >()

    React.useEffect(()=>{
        const updatedCompany = location.state?.updatedCompany;

        if(updatedCompany){
            setCompanie (updatedCompany);
            return
        } else if (companieId){
            getCompany(parseInt(companieId)).then((companieData)=>{
                setCompanie(companieData as Companie)
        })
        }
},[companieId, location.state])

if (!companie) return <div>Company not found</div>;


    return (
        <>
        <div>
            <h1>Companies detail</h1>
            <p>Details for company {companie?.name}</p>
            <ul>
                <li><strong>Id:</strong>{companie?.id}</li>
                <li><strong>Id:</strong>{companie?.name}</li>
                <li><strong>Id:</strong>{companie?.description}</li>
            </ul>
            <ul>
                <li>
            <NavLink to="/">Home</NavLink>
                </li>
                <li>
            <NavLink to={`/companies/${companie?.id}/edit`}>Editar</NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}