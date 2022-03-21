export const addCart = (item) => ({
  type: "ADD_CART",
  payload: item,
});

export const deteleCart = (item) => ({
    type: "DELETE_CART",
    payload: item,
  });
  