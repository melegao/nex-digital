import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { FormLoginContainer } from "./styles";
import { InputBase } from "../input";
import { ButtonBase } from "../button";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    api
      .post("/login", data)
      .then((res) => handleSuccess(res.data))
      .catch((err) => handleError());
  };

  const handleSuccess = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("usedId", data.userId);
    toast.success("Logado com sucesso");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const handleError = () => {
    toast.error("Verifique e-mail ou senha");
  };

  return (
    <FormLoginContainer onSubmit={handleSubmit(onSubmit)}>
      <InputBase
        type="text"
        placeholder="Digite seu e-mail"
        name="email"
        register={register}
        label="E-mail"
        error={errors?.email?.message}
      />
      <InputBase
        type="password"
        register={register}
        placeholder="Digite sua senha"
        name="password"
        label="Senha"
        error={errors?.password?.message}
      />
      <ButtonBase type="submit">Entrar</ButtonBase>
    </FormLoginContainer>
  );
}

export default FormLogin;
