// const updateproduct = (state, products) => {
//   state.products[
//     state.products.findIndex((item) => item._id === action.payload._id)
//   ] = action.payload;
//   return {
//     ...state,
//     isFetching: false,
//   };
// };

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_START":
      return {
        products: [],
        isFetching: true,
        error: false,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        products: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        products: [],
        isFetching: false,
        error: true,
      };
    case "DELETE_PRODUCT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_PRODUCT_SUCCESS":
      return {
        products: state.products.filter((item) => item._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_PRODUCT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_PRODUCT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_PRODUCT_SUCCESS":
      state.products[
        state.products.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
      return {
        ...state,
        products: state.products,
        isFetching: false,
        error: false,
      };
    case "UPDATE_PRODUCT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "CREATE_PRODUCT_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_PRODUCT_SUCCESS":
      return {
        products: [...state.products,action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_PRODUCT_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
export default ProductReducer;
