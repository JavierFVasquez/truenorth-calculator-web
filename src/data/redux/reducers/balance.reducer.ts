import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { User } from "../../models/user.model";

interface BalanceState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: BalanceState = {
  data: null,
  loading: false,
  error: null
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    balanceAction: state => {
      state.loading = true;
      state.error = null;
    },
    balanceSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    balanceFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { balanceAction, balanceSuccess, balanceFailure } = balanceSlice.actions;

export const selectBalance = (state: RootState) => state.balance;

export default balanceSlice;
