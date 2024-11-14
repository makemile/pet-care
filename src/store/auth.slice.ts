import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    }, 

    loginSucces(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.token = action.payload;
      state.error = null;
      state.loading = false;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.token = null;
      state.error = action.payload || 'login failed';
      state.loading = false;
    },
    logout(state){
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    }

  },
});

export const { loginStart,loginSucces, loginFailure, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;