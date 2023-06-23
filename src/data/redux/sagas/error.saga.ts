import { takeLatest, put } from "redux-saga/effects";
import { deleteRecordFailure } from "../reducers/delete-record.reducer";
import { errorAction } from "../reducers/error.reducer";
import { operationFailure } from "../reducers/operation.reducer";
import { fetchRecordListFailure } from "../reducers/record.reducer";

function* errorSaga(action: any): Generator<any, void, any> {
  yield put(errorAction(action.payload));
}

function* errorSagas() {
  yield takeLatest(deleteRecordFailure.type, errorSaga);
  yield takeLatest(operationFailure.type, errorSaga);
  yield takeLatest(fetchRecordListFailure.type, errorSaga);
}

export default errorSagas;
