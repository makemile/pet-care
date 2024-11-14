import { loginUser } from "../services/Auth.service";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const loading = useSelector((state: RootState) => state.auth.loading);
  console.log(loading);
  const token = useSelector((state: RootState) => state.auth.token);
  const error = useSelector((state: RootState) => state.auth.error);

  const login = async (email: string, password: string) => {
    try {
      console.log(loading);
      const token = await loginUser(email, password, dispatch);
      console.log(token);
      if (token) {
        console.log("recibido", token);
        console.log(loading);
      }
    } catch (error: any) {
      console.log("Login fallido");
    }
  };

  return { isAuthenticated, token, error, login, loading };
};
