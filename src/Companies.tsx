import { getCompanies } from "./services/companies";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import * as React from "react"
import style from "./company.module.css"

type Companie = {
    id: number,
    name: string,
    description: string,
}

export default function Companie() {

    // const companies = useLoaderData() as Companie[];

    const [companies, setCompanies] = React.useState<Companie[]>([]);

    const location = useLocation()

    React.useEffect(()=>{
        getCompanies().then((companyData)=>{
            setCompanies(companyData as Companie[])
        })
    }, [])

    React.useEffect(() => {
    document.body.style.backgroundColor = "#64b0fcff";

    const updatedCompany = location.state?.updatedCompany;

    if(updatedCompany){
        setCompanies((prevCompany)=> prevCompany.map((companie)=> companie.id === updatedCompany.id ? updatedCompany : companie)
    );
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [location.state]);


    return (
        <>
        <h1>Hola soy companie</h1>
        <NavLink to={"/"}>Regresar</NavLink>
                <ul>
                    {companies.map((company)=>(
                        <li key={company.id}>
                            <NavLink className={({isActive})=>(isActive ? style.active : "")} to={`/companies/${company.id}`}>{company.name}</NavLink>
                            <p>{company.description}</p>
                        </li>
                    ))}
                </ul>
            <div id="uwu">
                <Outlet />
            </div>
        </>
    )
}