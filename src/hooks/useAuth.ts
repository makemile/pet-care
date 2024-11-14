
import { loginSucces, loginFailure } from "../store/auth.slice";
import { loginUser } from "../services/Auth.service";
// import { AppDispatch } from "../store/store";

export const useAuth = () => {


  const login = (email: string, password: string) => async (dispatch:any) =>{
    try {
      const token = await loginUser(email, password);
      console.log(token)
      if(token){
        console.log('recibido', token)
        dispatch(loginSucces(token));
      }
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

  return {login}
};
