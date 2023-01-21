import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Button } from "../button/styles";
import { InputBase } from "../input";
import { ContainerFormRegister } from "./styles";
import { useNavigate } from "react-router-dom";

function FormRegister() {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório!")
      .matches(
        "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
        "Digite letras somente"
      ),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório").min(4),
    passwordConfirmation: yup
      .string()
      .required("Confirmação obrigatória!")
      .oneOf([yup.ref("password"), null], "A senha deve ser igual"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    api
      .post("/users", newData)
      .then((res) => handleSuccess(res))
      .catch((err) => handleError(err.response));
  };

  const handleSuccess = () => {
    toast.success("Usuário registrado com sucesso");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleError = (data) => {
    if (data.data.message === "User already registered!") {
      toast.error("Usuário já cadastrado!");
    } else {
      toast.error("Tente novamente mais tarde");
    }
  };

  return (
    <ContainerFormRegister onSubmit={handleSubmit(onSubmit)}>
      <InputBase
        name="name"
        label="Nome *"
        placeholder="Digite seu nome"
        type="text"
        register={register}
        error={errors?.name?.message}
      />
      <InputBase
        name="email"
        label="E-mail *"
        placeholder="Informe seu e-mail"
        type="text"
        register={register}
        error={errors?.email?.message}
      />
      <InputBase
        name="password"
        label="Senha *"
        placeholder="Informe uma senha"
        type="password"
        register={register}
        error={errors?.password?.message}
      />
      <InputBase
        name="passwordConfirmation"
        label="Confirmação de senha *"
        placeholder="Confirme sua senha"
        type="password"
        register={register}
        error={errors?.passwordConfirmation?.message}
      />
      <Button type="submit">Registrar</Button>
    </ContainerFormRegister>
  );
}

export default FormRegister;
