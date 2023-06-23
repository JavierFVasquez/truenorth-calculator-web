import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import {
  balanceAction,
  balanceFailure,
  balanceSuccess
} from "../reducers/balance.reducer";
import { getBalanceService } from "../../../services/balance/balance.service";
import { operationSuccess } from "../reducers/operation.reducer";

function* fetchBalanceSaga(): Generator<any, void, any> {
  try {
    const data = yield call(getBalanceService);
    yield put(balanceSuccess(data));
  } catch (error: any) {
    if (error?.response?.data) {
      yield put(balanceFailure(error.response.data));
    } else {
      yield put(balanceFailure(error.message));
    }
  }
}
function* balanceSagas() {
  yield takeEvery(balanceAction.type, fetchBalanceSaga);
  yield takeLatest(operationSuccess.type, fetchBalanceSaga);
}

export default balanceSagas;
