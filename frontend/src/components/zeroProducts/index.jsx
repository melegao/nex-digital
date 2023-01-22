import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { ZeroProductsContainer } from "./styles";

function ZeroProducts() {
  const { setOpenModal, openModal } = useContext(ProductContext);
  return (
    <ZeroProductsContainer>
      <h2>Cadastre o primeiro produto</h2>
      <p onClick={() => setOpenModal({ ...openModal, modalAdd: true })}>
        Clique aqui
      </p>
    </ZeroProductsContainer>
  );
}

export default ZeroProducts;
