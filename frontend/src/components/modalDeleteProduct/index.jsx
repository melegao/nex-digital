import React, { useContext } from "react";
import { toast } from "react-toastify";
import { ProductContext } from "../../context/productContext";
import api from "../../services/api";
import { ButtonBase } from "../button";
import { ModalDeleteContainer } from "./styles";

function ModalDeleteProduct() {
  const userToken = localStorage.getItem("token");

  const {
    productTarget,
    setProductTarget,
    setOpenModal,
    openModal,
    updateProduct,
    setUpdateProducts,
  } = useContext(ProductContext);

  const closeModal = () => {
    setOpenModal({ ...openModal, modalDelete: false });
  };

  const handleDelete = () => {
    api
      .delete(`product/${productTarget.id}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => handleSuccess())
      .catch((err) => handleFailed());
  };

  const handleSuccess = () => {
    toast.success("Produto deletado!");
    setOpenModal({ ...openModal, modalDelete: false });
    setUpdateProducts(!updateProduct);
    setProductTarget({});
  };

  const handleFailed = () => {
    toast.error("Tente novamente mais tarde");
    setOpenModal({ ...openModal, modalDelete: false });
    setUpdateProducts(!updateProduct);
    setProductTarget({});
  };

  return (
    <ModalDeleteContainer>
      <div className="modal--delete">
        <p className="modal--close" onClick={() => closeModal()}>
          x
        </p>
        <p>Deletar o produto?</p>
        <ButtonBase onClick={() => handleDelete()}>Confirmar</ButtonBase>
      </div>
    </ModalDeleteContainer>
  );
}

export default ModalDeleteProduct;
