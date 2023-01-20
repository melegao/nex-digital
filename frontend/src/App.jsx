import { ToastContainer } from "react-toastify";
import Ways from "./routes/routes";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Ways />
      <ToastContainer />
    </>
  );
}

export default App;
