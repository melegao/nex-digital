import FormLogin from "../../components/formLogin";
import { HomeContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import nexLogoNew from "../../assets/nexLogoNew.png";

function Login() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <img src={nexLogoNew} alt="Nex Digital" width="100rem" />
      <FormLogin />
      <p>
        Não tem cadastro?{" "}
        <span onClick={() => navigate("/cadastro")}>Registre-se</span>
      </p>
    </HomeContainer>
  );
}

export default Login;
