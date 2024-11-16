import { loginUser } from "../services/Auth.service";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();
  const loading = useSelector((state: RootState) => state.auth.loading);
  const token = useSelector((state: RootState) => state.auth.token);
  const error = useSelector((state: RootState) => state.auth.error);

  const login = async (email: string, password: string) => {
    try {
      const token = await loginUser(email, password, dispatch);
      if (token) {
        console.log("recibido", token);
      }
    } catch (error: any) {
      console.log("Login fallido");
    }
  };

  const signOut = () => {
    dispatch({type: "auth/logout"});
    navigate("/", { replace: true });
  }

  return { isAuthenticated, token, error, login, loading, signOut };
};
