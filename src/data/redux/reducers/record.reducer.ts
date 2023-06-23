import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import {
  PaginationData,
  PaginationRequest
} from "../../models/pagination.model";
import { Record } from "../../models/record.model";

interface RecordState {
  data: PaginationData<Record> | null;
  loading: boolean;
  balance: number | null;
  pagination: PaginationRequest;
  error: string | null;
}

const initialState: RecordState = {
  data: null,
  loading: false,
  balance: null,
  pagination: {
    page: 1,
    pageSize: 10
  },
  error: null
};

const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    fetchRecordList: state => {
      state.loading = true;
      state.error = null;
      state.pagination.page = 1;
    },
    fetchRecordListNextPage: state => {
      state.loading = true;
      state.pagination.page += 1;
      state.error = null;
    },
    fetchRecordListSuccessNextPage: (state, action) => {
      if (state.data) {
        state.data.data = [...(state.data?.data || []), ...action.payload.data];
        state.data.metadata = action.payload.metadata;
      }
      state.loading = false;
    },
    fetchRecordListSuccess: (state, action) => {
      state.data = action.payload;
      state.balance = action?.payload?.data?.[0].userBalance;
      state.loading = false;
    },
    addItemToRecordList: (state, action) => {
      if (state.data) {
        state.data.data = [action?.payload, ...state.data.data];
      }
      state.balance = action?.payload?.userBalance;
      state.loading = false;
    },
    fetchRecordListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchRecordList,
  fetchRecordListNextPage,
  fetchRecordListSuccess,
  fetchRecordListSuccessNextPage,
  addItemToRecordList,
  fetchRecordListFailure
} = recordSlice.actions;

export const selectRecord = (state: RootState) => state.record;

export default recordSlice;
