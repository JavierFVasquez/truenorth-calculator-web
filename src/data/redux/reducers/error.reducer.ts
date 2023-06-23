import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface ErrorState {
  error: string | null;
}

const initialState: ErrorState = {
  error: null
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    errorAction: (state, action) => {
      if (action.payload.clearError) {
        state.error = null;
      } else {
        let errorString = "";
        if (action.payload?.errorMessage) {
          errorString = action.payload.errorMessage;
        } else {
          errorString = "Request error";
        }

        state.error = errorString;
      }
    }
  }
});

export const { errorAction } = errorSlice.actions;

export const selectError = (state: RootState) => state.error;

export default errorSlice;
