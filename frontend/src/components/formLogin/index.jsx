import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { FormLoginContainer } from "./styles";

function FormLogin() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    api
      .post("/login", data)
      .then((res) => handleSuccess(res.data))
      .catch((err) => handleError());
  };

  const handleSuccess = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("usedId", data.userId);
    toast.success("Logado com sucesso");
  };

  const handleError = () => {
    toast.error("Verifique e-mail ou senha");
  };

  return (
    <FormLoginContainer onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="E-mail" {...register("email")} />
      <input placeholder="Password" type="password" {...register("password")} />
      <button type="submit">Login</button>
    </FormLoginContainer>
  );
}

export default FormLogin;
