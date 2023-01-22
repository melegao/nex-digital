import { createContext, useState } from "react";

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState({
    modalDelete: false,
    modalEdit: false,
    modalAdd: false,
  });

  const [productTarget, setProductTarget] = useState({});
  const [updateProduct, setUpdateProducts] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        openModal,
        setOpenModal,
        productTarget,
        setProductTarget,
        updateProduct,
        setUpdateProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
