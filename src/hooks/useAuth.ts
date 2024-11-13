import { useDispatch } from "react-redux";
import { loginSucces, loginFailure } from "../store/auth.slice";
import { loginUser } from "../services/Auth.service";

export const useAuth = () => {
  const dispatch = useDispatch();

  const login = async (email: string, password: string) => {
    try {
      const token = await loginUser(email, password);
      dispatch(loginSucces(token));
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

  return { login };
};
