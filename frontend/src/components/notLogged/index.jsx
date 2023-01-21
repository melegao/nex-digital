import { useNavigate } from "react-router-dom";
import { NotLoggedContainer } from "./styles";
import nexLogoNew from "../../assets/nexLogoNew.png";

function NotLogged() {
  const navigate = useNavigate();

  return (
    <NotLoggedContainer>
      <img src={nexLogoNew} alt="Nex Digital" />
      <h2>Atenção!</h2>
      <p>
        Para acessar o conteúdo, faça{" "}
        <span onClick={() => navigate("/")}>login</span> ou{" "}
        <span onClick={() => navigate("/cadastro")}>cadastre-se</span>
      </p>
    </NotLoggedContainer>
  );
}

export default NotLogged;
