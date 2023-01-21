import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "../productCard";
import { ProductContainerStyle } from "./styles";

function ProductsContainer() {
  const userToken = localStorage.getItem("token");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("product", {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <ProductContainerStyle>
      {products.map((elem) => (
        <ProductCard key={elem.id} props={elem}/>
      ))}
    </ProductContainerStyle>
  );
}

export default ProductsContainer;
