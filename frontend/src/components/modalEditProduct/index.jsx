import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../services/api";
import { ButtonBase } from "../button";
import { InputBase } from "../input";
import { ModalEditContainer } from "./styles";
import { toast } from "react-toastify";

function ModalEditProduct() {
  const {
    productTarget,
    setProductTarget,
    setOpenModal,
    openModal,
    setUpdateProducts,
    updateProduct,
  } = useContext(ProductContext);
  const userToken = localStorage.getItem("token");

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    price: yup
      .string()
      .required("Preço obrigatório")
      .matches("^[0-9]+[,]+[0-9]{2}$", "Ex: 100,90"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    const newData = {
      name: data.name,
      description: data.description,
      price: Number(data.price.replace(",", ".")),
    };

    api
      .patch(`product/${productTarget.id}`, newData, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => handleSuccess())
      .catch((err) => handleFailed());
  };

  const handleSuccess = () => {
    toast.success("Produto atualizado");
    setOpenModal({ ...openModal, modalEdit: false });
    setUpdateProducts(!updateProduct);
    setProductTarget({});
  };

  const handleFailed = () => {
    toast.error("Tente novamente mais tarde");
    setOpenModal({ ...openModal, modalEdit: false });
    setProductTarget({});
  };

  return (
    <ModalEditContainer>
      <form className="modal--editProduct" onSubmit={handleSubmit(onSubmit)}>
        <p onClick={() => setOpenModal({ ...openModal, modalEdit: false })}>
          X
        </p>
        <InputBase
          defaultValue={productTarget.name}
          placeholder="Nome"
          name="name"
          register={register}
          error={errors?.name?.message}
        />
        <InputBase
          defaultValue={productTarget.description}
          placeholder="Descrição"
          name="description"
          register={register}
          error={errors?.description?.message}
        />
        <InputBase
          defaultValue={productTarget.price.replace(".", ",")}
          placeholder="Preço"
          name="price"
          register={register}
          error={errors?.price?.message}
        />
        <ButtonBase width="13.5rem" type="submit">
          Atualizar
        </ButtonBase>
      </form>
    </ModalEditContainer>
  );
}

export default ModalEditProduct;
