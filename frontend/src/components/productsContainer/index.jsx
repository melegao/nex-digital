import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";
import api from "../../services/api";
import ProductCard from "../productCard";
import { ProductContainerStyle } from "./styles";

function ProductsContainer() {
  const userToken = localStorage.getItem("token");

  const [products, setProducts] = useState([]);
  const { productTarget, setProductTarget, setOpenModal, openModal, updateProduct, setUpdateProducts } =
    useContext(ProductContext);

  useEffect(() => {
    api
      .get("product", {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [updateProduct]);


  return (
    <ProductContainerStyle>
      {products.map((elem) => (
        <ProductCard key={elem.id} props={elem}/>
      ))}
    </ProductContainerStyle>
  );
}

export default ProductsContainer;
