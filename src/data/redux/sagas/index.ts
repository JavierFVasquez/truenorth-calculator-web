import { all } from "redux-saga/effects";
import recordSaga from "./record.saga";
import operationSagas from "./operation.saga";
import errorSagas from "./error.saga";
import balanceSagas from "./balance.saga";

export default function* root() {
  yield all([recordSaga(), operationSagas(), errorSagas(), balanceSagas()]);
}
