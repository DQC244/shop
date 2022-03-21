import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";

const init_state = {
  products: [],
  isFetching: false,
  error: false,
};
export const ProductContext = createContext(init_state);

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, init_state);
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
