import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Record } from "../../models/record.model";

interface DeleteRecordState {
  data: Record | null;
  loading: boolean;
  idLoading: string | null;
  error: string | null;
}

const initialState: DeleteRecordState = {
  data: null,
  loading: false,
  idLoading: null,
  error: null
};

const deleteRecordSlice = createSlice({
  name: "deleteRecord",
  initialState,
  reducers: {
    deleteRecord: (state, action) => {
      state.loading = true;
      state.error = null;
      state.idLoading = action?.payload?.id;
    },
    deleteRecordSuccess: (state, action) => {
      state.data = action.payload;
      state.idLoading = null;
      state.loading = false;
    },
    deleteRecordFailure: (state, action) => {
      state.loading = false;
      state.idLoading = null;
      state.error = action.payload;
    }
  }
});

export const { deleteRecord, deleteRecordSuccess, deleteRecordFailure } =
  deleteRecordSlice.actions;

export const selectDeleteRecord = (state: RootState) => state.deleteRecord;

export default deleteRecordSlice;
