const addCart = (state, product) => {
  let check = false;
  state.cart.forEach((c) => {
    if (c._id === product._id && c.color === product.color) {
      check = true;
      state.total =
        state.total - c.price * c.quantity + product.price * product.quantity;
      c.quantity = product.quantity;
    }
  });
  if (check)
    return {
      cart: [...state.cart],
      total: state.total,
      quantity: state.quantity,
    };
  else
    return {
      cart: [...state.cart, product],
      quantity: state.quantity + 1,
      total: state.total + product.price * product.quantity,
    };
};

const deleteCart = (state, product) => {
  return {
    cart: [...state.cart].filter((c) => {
      if (c._id === product._id && product.color === c.color) {
        return false;
      } else {
        return true;
      }
    }),
    quantity: state.quantity - 1,
    total: state.total - product.price * product.quantity,
  };
};
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return addCart(state, action.payload);

    case "DELETE_CART":
      return deleteCart(state, action.payload);

    default:
      return { ...state };
  }
};
export default CartReducer;
