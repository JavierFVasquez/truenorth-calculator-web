import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { User } from "../../models/user.model";
interface AuthState {
  user: User | null;
  status: string;
  token: string;
  isLoading: boolean;
}

export const authInitialState: AuthState = {
  user: null,
  status: "LOADING",
  token: "",
  isLoading: true
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    auth(state) {
      return state;
    },
    onLogin(state, action) {
      state.user = action.payload.user;
      state.status = "AUTHENTICATED";
      state.token = action.payload.token;
      state.isLoading = false;
    },
    onLogout(state) {
      state.user = null;
      state.status = "UNAUTHENTICATED";
      state.token = "";
      state.isLoading = false;
    }
  }
});

export const { onLogin, onLogout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice;
