import axios from "axios";
import {
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  createUserStart,
  createUserSuccess,
  createUserFailure,
} from "./UserAction";

//get users
export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("/user", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("root")).accessToken,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (e) {
    dispatch(getUsersFailure());
  }
};

//delete
export const deleteUser = async (dispatch, id) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("/user/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("root")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (e) {
    dispatch(deleteUserFailure());
  }
};

// create
export const createUser = async (dispatch, newUser) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post("/auth/register", newUser);
    dispatch(createUserSuccess(res.data));
    return new Promise(function (resolve, reject) {
      resolve("Success");
    });
  } catch (e) {
    dispatch(createUserFailure());
    return new Promise(function (resolve, reject) {
      reject("Create User Failure");
    });
  }
};
