import { ButtonBase } from "../button";
import { InputBase } from "../input";
import { ModalNewProductContainer } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function ModalNewProduct({ setModalOpen, modalOpen }) {
  const userId = localStorage.getItem("usedId");
  const userToken = localStorage.getItem("token")
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    price: yup.string().required("Preço obrigatório").matches('^[0-9]+[,]+[0-9]{2}$', "Ex: 100,90"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    const newData = {
      name: data.name,
      description: data.description,
      price: Number(data.price.replace(",",".")),
      ownerId: Number(userId),
    };

    api.post("product", newData, {
        headers: { Authorization: `Bearer ${userToken}`}
    })
    .then((res) => handleSuccess())
    .catch((err) => console.log(err))

    console.log(newData);
  };

  const handleSuccess = () => {
    toast.success("Produto cadastrado")
    setModalOpen(!modalOpen)
  }

  return (
    <ModalNewProductContainer>
      <form className="modal--newProduct" onSubmit={handleSubmit(onSubmit)}>
        <p onClick={() => setModalOpen(!modalOpen)}>X</p>
        <InputBase
          placeholder="Nome"
          name="name"
          register={register}
          error={errors?.name?.message}
        />
        <InputBase
          placeholder="Descrição"
          name="description"
          register={register}
          error={errors?.description?.message}
        />
        <InputBase
          placeholder="Preço"
          name="price"
          register={register}
          error={errors?.price?.message}
        />
        <ButtonBase width="13.5rem" type="submit">
          Cadastrar
        </ButtonBase>
      </form>
    </ModalNewProductContainer>
  );
}

export default ModalNewProduct;
