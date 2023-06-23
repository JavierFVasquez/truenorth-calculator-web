import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.reducer";
import recordSlice from "./record.reducer";
import createSagaMiddleware from "redux-saga";
import root from "../sagas";
import deleteRecordSlice from "./delete-record.reducer";
import operationSlice from "./operation.reducer";
import errorSlice from "./error.reducer";
import balanceSlice from "./balance.reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    record: recordSlice.reducer,
    deleteRecord: deleteRecordSlice.reducer,
    operation: operationSlice.reducer,
    error: errorSlice.reducer,
    balance: balanceSlice.reducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(root);

export type RootState = ReturnType<typeof store.getState>;
