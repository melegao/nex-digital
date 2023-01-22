import Header from "../../components/header";
import NewProduct from "../../components/newProduct";
import NotLogged from "../../components/notLogged";
import ProductsContainer from "../../components/productsContainer";
import { useContext } from 'react';
import { ProductContext } from "../../context/productContext";
import ModalDeleteProduct from "../../components/modalDeleteProduct";

function Home() {

  const {openModal} = useContext(ProductContext)

  console.log(openModal)

  const token = localStorage.getItem("token");

  return (
    <>
      {token === null ? (
        <NotLogged />
      ) : (
        <>
          <Header />
          <ProductsContainer />
          <NewProduct />
          {openModal.modalDelete && <ModalDeleteProduct />}
        </>
      )}
    </>
  );
}

export default Home;
