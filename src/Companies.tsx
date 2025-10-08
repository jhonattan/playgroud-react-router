import { useEffect } from "react";
import { Link } from "react-router-dom";

function Companies() {
  useEffect(() => {
    //monta el componente en la pagina
    document.body.style.backgroundColor = "#4e5358ff";

    //desmonta el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <p>Shows a list of companies</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Companies;
