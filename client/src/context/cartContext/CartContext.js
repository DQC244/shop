import { createContext, useReducer, useEffect } from "react";
import CartReducer from "./CartReducer";

const initState = {
  ...(JSON.parse(localStorage.getItem("cart")) || {
    cart: [],
    quantity: 0,
    total: 0,
  }),
};

export const CartContext = createContext(initState);
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initState);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);
  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        quantity: state.quantity,
        total: state.total,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
