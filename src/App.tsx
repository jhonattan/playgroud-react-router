import { useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    //monta el componente en la pagina
    document.body.style.backgroundColor = "#33a71fff";

    //desmonta el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>Critics Home Page</h1>
      <p>Honest reviews about Games and Companies</p>

      <Navegation />
    </div>
  );
}

const Navegation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/companies">Companies</Link>
        </li>
        <li>
          <Link to="/*">Invalid Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default App;
