import React from "react";
import FormRegister from "../../components/formRegister";
import { RegisterContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import nexLogoNew from "../../assets/nexLogoNew.png";

function Register() {
  const navigate = useNavigate();

  return (
    <RegisterContainer>
      <img src={nexLogoNew} alt="Nex Digital" width="100rem" />
      <FormRegister />
      <p className="navitation-link" onClick={() => navigate("/")}>
        Voltar
      </p>
      ,
    </RegisterContainer>
  );
}

export default Register;
