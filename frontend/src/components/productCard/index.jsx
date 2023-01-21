import React from "react";
import { ProductCardContainer } from "./styles";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function ProductCard({ props }) {
  console.log(props);

  const userId = localStorage.getItem("usedId");
  const isOwner = Number(userId) === props.ownerId;

  console.log(isOwner);

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
          <BsFillTrashFill  className="icon"/>
        </div>
      )}
    </ProductCardContainer>
  );
}

export default ProductCard;
