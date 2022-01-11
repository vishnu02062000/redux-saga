import { all, fork } from "redux-saga/effects";
import variableSaga from "../redux/sagas";

export function* rootSaga() {
  yield all([fork(variableSaga)]);
}