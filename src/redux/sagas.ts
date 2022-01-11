import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchvariableSuccess, fetchVariableFailure } from "./actions";
import { FETCH_VARIABLES_REQUEST } from "./actionTypes";
import { IVariable } from "./types";

const getVariables = () =>
    axios.get<IVariable[]>("http://localhost:3000/variables");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchVariableSaga() {
    try {
        const response: AxiosResponse<IVariable[]> = yield call(getVariables);
        console.log(response);
        yield put(
            fetchvariableSuccess({
                variables: response.data,
            })
        );
    } catch (e: any) {
        yield put(
            fetchVariableFailure({
                error: e.message,
            })
        );
    }
}

function* variableSaga(){
    yield all([takeLatest(FETCH_VARIABLES_REQUEST, fetchVariableSaga)]);
}

export default variableSaga;