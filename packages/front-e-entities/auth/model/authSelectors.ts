import { AuthState } from "./authSlice";

export const selectIsInitialize = (state: { auth: AuthState }) =>
  state.auth.isInitialize;
