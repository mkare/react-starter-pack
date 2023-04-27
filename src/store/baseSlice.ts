import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "@utils/requests";

export interface BaseState {
  theme: "light" | "dark";
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined; // allow undefined
  user:
    | boolean
    | {
        email: string;
        password: string;
      };
}

const initialState: BaseState = {
  theme: "light",
  status: "idle",
  error: undefined,
  user: false,
};

// The base reducers
// setTheme sets the theme to light or dark
// setStatus sets the status to idle, loading, succeeded, or failed
// setError sets the error to null or a string
// setUser sets the user to null or a user object

export const loginAsync = createAsyncThunk(
  "base/loginAsync",
  async (user: { email: string; password: string }) => {
    const response = await login(user);
    return response;
  }
);

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default baseSlice.reducer;
