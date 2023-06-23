import { takeLatest, call, put, select, takeEvery } from "redux-saga/effects";
import {
  fetchRecordList,
  fetchRecordListSuccess,
  fetchRecordListFailure,
  fetchRecordListNextPage,
  fetchRecordListSuccessNextPage,
  addItemToRecordList
} from "../reducers/record.reducer";
import { getRecordListService } from "../../../services/record/record.service";
import {
  deleteRecord,
  deleteRecordSuccess,
  deleteRecordFailure
} from "../reducers/delete-record.reducer";
import { deleteRecordService } from "../../../services/record/record.service";
import { PaginationRequest } from "../../models/pagination.model";
import { operationSuccess } from "../reducers/operation.reducer";

function* refetchRecordListSaga(): Generator<any, void, any> {
  yield put(fetchRecordList());
}

function* fetchRecordListSaga(action: any): Generator<any, void, any> {
  try {
    const state = yield select();
    const pagination: PaginationRequest = state.record.pagination;
    const data = yield call(getRecordListService, { pagination });
    if (action.type === fetchRecordListNextPage.type) {
      yield put(fetchRecordListSuccessNextPage(data));
    } else {
      yield put(fetchRecordListSuccess(data));
    }
  } catch (error: any) {
    if (error?.response?.data) {
      yield put(fetchRecordListFailure(error.response.data));
    } else {
      yield put(fetchRecordListFailure(error.message));
    }
  }
}

function* deleteRecordSaga(action: any): Generator<any, void, any> {
  const { payload } = action;
  try {
    const data = yield call(deleteRecordService, { id: payload.id });
    yield put(deleteRecordSuccess(data));
  } catch (error: any) {
    if (error?.response?.data) {
      yield put(deleteRecordFailure(error.response.data));
    } else {
      yield put(deleteRecordFailure(error.message));
    }
  }
}

function* addRecordItemToList(action: any): Generator<any, void, any> {
  yield put(addItemToRecordList(action.payload));
}

function* recordSaga() {
  yield takeEvery(fetchRecordList.type, fetchRecordListSaga);
  yield takeLatest(fetchRecordListNextPage.type, fetchRecordListSaga);
  yield takeLatest(deleteRecordSuccess.type, refetchRecordListSaga);
  yield takeLatest(deleteRecord.type, deleteRecordSaga);
  yield takeLatest(operationSuccess.type, addRecordItemToList);
}

export default recordSaga;
