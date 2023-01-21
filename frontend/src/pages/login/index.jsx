import FormLogin from "../../components/formLogin";
import { HomeContainer } from "./styles";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <FormLogin />
      <p>
        Não tem cadastro?{" "}
        <span onClick={() => navigate("/cadastro")}>Registre-se</span>
      </p>
    </HomeContainer>
  );
}

export default Login;
