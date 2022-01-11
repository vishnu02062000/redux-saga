import { FETCH_VARIABLES_REQUEST, FETCH_VARIABLES_SUCCESS, FETCH_VARIABLES_FAILURE } from "./actionTypes";
import { FetchVariableSuccessPayload,
    FetchVariableFailurePayload,
    FetchVariableRequest,
    FetchVariableSuccess,
    FetchVariableFailure 
} from "./types";

export const fetchVariableRequest = (): FetchVariableRequest => ({
  type: FETCH_VARIABLES_REQUEST,
});

export const fetchvariableSuccess = (
  payload: FetchVariableSuccessPayload
): FetchVariableSuccess => ({
  type: FETCH_VARIABLES_SUCCESS,
  payload,
});

export const fetchVariableFailure = (
  payload: FetchVariableFailurePayload
): FetchVariableFailure => ({
  type: FETCH_VARIABLES_FAILURE,
  payload,
});