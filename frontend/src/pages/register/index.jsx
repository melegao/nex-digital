import React from "react";
import FormRegister from "../../components/formRegister";
import { RegisterContainer } from "./styles";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <RegisterContainer>
      <FormRegister />
      <p className="navitation-link" onClick={() => navigate("/")}>Voltar</p>,
    </RegisterContainer>
  );
}

export default Register;
