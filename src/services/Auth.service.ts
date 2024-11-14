import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    console.log(response.data.token)
    return response.data.token;
  } catch (error) {
    console.error("usuario o contraseña no registrado", error)
  }
};
