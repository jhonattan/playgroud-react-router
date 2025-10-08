import { useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  useEffect(() => {
    //monta el componente en la pagina
    document.body.style.backgroundColor = "#82c4a5ff";

    //desmonta el componente de la pagina
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <p>Shows a form to login the user</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Login;
