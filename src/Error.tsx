import { useEffect } from "react";
import { Link } from "react-router-dom";

function Error() {
  useEffect(() => {
    //monta el componente en la pagina
    document.body.style.backgroundColor = "#b53316ff";

    //desmonta el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>Error Page</h1>
      <p>404 Not Found</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Error;
