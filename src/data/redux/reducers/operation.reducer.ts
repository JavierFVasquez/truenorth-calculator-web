import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Record } from "../../models/record.model";

interface OperationState {
  data: Record | null;
  loading: boolean;
  operation: string | null;
  result: string | number;
  error: string | null;
}

const initialState: OperationState = {
  data: null,
  loading: false,
  operation: null,
  result: "",
  error: null
};

const operationSlice = createSlice({
  name: "operation",
  initialState,
  reducers: {
    operationAction: (state, action) => {
      state.loading = true;
      state.result = "";
      state.operation = action.payload.operation;
      state.error = null;
    },
    operationSuccess: (state, action) => {
      state.data = action.payload;
      if (action.payload.operation.operation === "RANDOM_STRING") {
        state.result = action.payload.operation.stringResult;
      } else {
        state.result = action.payload.operation.result;
      }
      state.operation = null;
      state.loading = false;
    },
    operationFailure: (state, action) => {
      state.loading = false;
      state.operation = null;
      state.error = action.payload;
    }
  }
});

export const { operationAction, operationSuccess, operationFailure } =
  operationSlice.actions;

export const selectOperation = (state: RootState) => state.operation;

export default operationSlice;
