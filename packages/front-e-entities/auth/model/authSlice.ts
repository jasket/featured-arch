import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { asyncTimeout } from "@front/shared";

export interface AuthState {
  isInitialize: boolean;
}

const initialState: AuthState = {
  isInitialize: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initApp: (state) => {
      state.isInitialize = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAppInitialize.fulfilled, (state, action) => {
      state.isInitialize = action.payload;
    });
  },
});

export const fetchAppInitialize = createAsyncThunk(
  "auth/fetchAppInitialize",
  async () => {
    await asyncTimeout(2000);
    return true;
  }
);
