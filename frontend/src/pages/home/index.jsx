import Header from "../../components/header";
import NewProduct from "../../components/newProduct";
import NotLogged from "../../components/notLogged";
import ProductsContainer from "../../components/productsContainer";

function Home() {
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
        </>
      )}
    </>
  );
}

export default Home;
