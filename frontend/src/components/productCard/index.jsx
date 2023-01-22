import React from "react";
import { ProductCardContainer } from "./styles";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

function ProductCard({ props }) {
  
  const userId = localStorage.getItem("usedId");
  const isOwner = Number(userId) === props.ownerId;

  const {productTarget, setProductTarget, setOpenModal, openModal} = useContext(ProductContext)

  const openModalDelete = () => {
    setProductTarget(props)
    setOpenModal({...openModal, modalDelete: true})
  }

  return (
    <ProductCardContainer>
      <h3 className="title">{props?.name}</h3>
      <p className="description">{props?.description}</p>
      <p className="price">
        {Number(props.price).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      {isOwner && (
        <div className="isOwner">
          <BsFillPencilFill className="icon"/>
          <BsFillTrashFill  className="icon" onClick={() => openModalDelete()}/>
        </div>
      )}

    </ProductCardContainer>
  );
}

export default ProductCard;
