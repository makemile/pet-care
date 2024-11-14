import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSucces(state, action: PayloadAction<string>) {
      console.log(state.isAuthenticated = false)
      state.isAuthenticated = true;
      console.log(state.isAuthenticated = true)
      state.token = action.payload;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.token = null;
      state.error = action.payload || 'login failed';
    },
  },
});

export const { loginSucces, loginFailure } = authSlice.actions;
export const authReducer = authSlice.reducer;