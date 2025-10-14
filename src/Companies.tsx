import * as React from "react"
import { NavLink } from "react-router-dom";

type Company = {
  id: number,
  name: string,
  description: string,
}

function Companies() {
  const [companie, setCompanie] = React.useState<Company[]>([])


  React.useEffect(() => {
    
    document.body.style.backgroundColor = "#4e5358ff";

  
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [companie]);

  return (
    <>
    <h1>Hola soy companie</h1>
        <NavLink to={"/"}>Regresar</NavLink>
                <ul>
                    {/* {companies.map((company)=>(
                        <li key={company.id}>
                            <NavLink className={({isActive})=>(isActive ? style.active : "")} to={`/companies/${company.id}`}>{company.name}</NavLink>
                            <p>{company.description}</p>
                        </li>
                    ))} */}
                </ul>
    </>
  );
}

export default Companies;
