import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth.slice";
import { navBarReducer } from "./navbar.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    navbar: navBarReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;