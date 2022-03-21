import axios from "axios";
import {
  loginStart,
  loginFailure,
  loginSuccess,
  registerStart,
  registerFailure,
  registerSuccess,
} from "./AuthAction";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (e) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("auth/register", user);
    dispatch(registerSuccess());
    
  } catch (e) {
    dispatch(registerFailure());
  }
};
