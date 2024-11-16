import axios from "axios";
import { loginStart, loginFailure, loginSucces } from "../store/auth.slice";

export const loginUser = async (email: string, password: string, dispatch: any) => {
  dispatch(loginStart());
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    if (response.data.token) {
      dispatch(loginSucces(response.data.token));
      return response.data.token;
    }
  } catch (error) {
    dispatch(loginFailure("Usuario o contraseña incorrectos"));
    return null
  }
};
