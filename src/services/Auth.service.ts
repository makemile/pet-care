import axios from "axios";
import { loginFailure, loginSucces } from "../store/auth.slice";

export const loginUser = async (email: string, password: string, dispatch: any) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    console.log(response.data.token)
    if (response.data.token) {
      dispatch(loginSucces(response.data.token)); // Si la respuesta es exitosa, actualizamos Redux con el token
      return response.data.token;
    }
  } catch (error) {
    console.error("usuario o contraseña no registrado", error)
    dispatch(loginFailure("Usuario o contraseña incorrectos"));
    return null
  }
};
