import { takeLatest, call, put } from "redux-saga/effects";
import {
  operationAction,
  operationSuccess,
  operationFailure
} from "../reducers/operation.reducer";
import {
  addition,
  division,
  multiplication,
  randomString,
  squareRoot,
  substraction
} from "../../../services/operation/operation.service";

function* operationSaga(action: any): Generator<any, void, any> {
  try {
    const { payload } = action;
    let data;
    switch (payload.operation) {
      case "ADDITION":
        data = yield call(addition, {
          operand1: payload.operand1,
          operand2: payload.operand2
        });
        break;
      case "SUBSTRACTION":
        data = yield call(substraction, {
          operand1: payload.operand1,
          operand2: payload.operand2
        });
        break;
      case "MULTIPLICATION":
        data = yield call(multiplication, {
          operand1: payload.operand1,
          operand2: payload.operand2
        });
        break;
      case "DIVISION":
        data = yield call(division, {
          operand1: payload.operand1,
          operand2: payload.operand2
        });
        break;
      case "SQUARE_ROOT":
        data = yield call(squareRoot, {
          operand1: payload.operand1,
          operand2: payload.operand2
        });
        break;
      case "RANDOM_STRING":
        data = yield call(randomString, {
          operand1: payload.operand1,
          operand2: payload.operand2
        });
        break;
    }
    yield put(operationSuccess(data));
  } catch (error: any) {
    if (error?.response?.data) {
      yield put(operationFailure(error.response.data));
    } else {
      yield put(operationFailure(error.message));
    }
  }
}

function* operationSagas() {
  yield takeLatest(operationAction.type, operationSaga);
}

export default operationSagas;
