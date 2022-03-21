import axios from "axios";
import { loginStart, loginFailure, loginSuccess } from "./AuthAction";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    res.data.isAdmin
      ? dispatch(loginSuccess(res.data))
      : dispatch(loginFailure());
  } catch (e) {
    dispatch(loginFailure());
  }
};
