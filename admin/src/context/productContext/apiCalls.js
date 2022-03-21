import {
  getProductsFailure,
  getProductsSuccess,
  getProductsStart,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  createProductStart,
  createProductSuccess,
  createProductFailure,
} from "./ProductAction";
import axios from "axios";
// get
export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await axios.get("/product");
    dispatch(getProductsSuccess(res.data));
  } catch (e) {
    dispatch(getProductsFailure());
  }
};
// delete
export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    await axios.delete("/product/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("root")).accessToken,
      },
    });
    dispatch(deleteProductSuccess(id));
  } catch (e) {
    dispatch(deleteProductFailure());
  }
};

// update
export const updateProduct = async (dispatch, product) => {
  dispatch(updateProductStart());
  try {
    const res = await axios.put("/product/" + product._id, product, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("root")).accessToken,
      },
    });
    dispatch(updateProductSuccess(res.data));
    return new Promise(function (resolve, reject) {
      resolve("Success");
    });
  } catch (e) {
    dispatch(updateProductFailure());
    return new Promise(function (resolve, reject) {
      reject("Update Product Failure");
    });
  }
};

// create

export const createProduct = async (dispatch, newProduct) => {
  dispatch(createProductStart());
  try {
    const res = await axios.post("/product/", newProduct, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("root")).accessToken,
      },
    });
    dispatch(createProductSuccess(res.data));
    return new Promise(function (resolve, reject) {
      resolve("Success");
    });
  } catch (e) {
    dispatch(createProductFailure());
    return new Promise(function (resolve, reject) {
      reject("Create Product Failure");
    });
  }
};
