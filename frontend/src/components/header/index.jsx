import { ButtonBase } from "../button";
import { HeaderContainer } from "./styles";
import nexLogoNew from "../../assets/nexLogoNew.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Até a próxima!");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <HeaderContainer>
      <div>
        <img src={nexLogoNew} alt="Nex Digital" />
        <ButtonBase onClick={() => handleLogout()} width="2.4rem">
          Sair
        </ButtonBase>
      </div>
    </HeaderContainer>
  );
}

export default Header;
