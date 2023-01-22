import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import ModalNewProduct from "../modalNewProduct";
import { NewProductContainer } from "./styles";

function NewProduct() {
  const { openModal, setOpenModal } = useContext(ProductContext);
  

  return (
    <>
      <NewProductContainer onClick={() => setOpenModal({ ...openModal, modalAdd: true })}>
        Cadastrar
      </NewProductContainer>
      {openModal.modalAdd && (
        <ModalNewProduct />
      )}
    </>
  );
}

export default NewProduct;
