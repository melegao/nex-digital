import { ToastContainer } from "react-toastify";
import Ways from "./routes/routes";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ProductProvider } from "./context/productContext";

function App() {
  return (
    <>
      <ProductProvider>
        <GlobalStyle />
        <Ways />
        <ToastContainer />
      </ProductProvider>
    </>
  );
}

export default App;
