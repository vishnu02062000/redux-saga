import { FETCH_VARIABLES_REQUEST, FETCH_VARIABLES_SUCCESS, FETCH_VARIABLES_FAILURE  } from "./actionTypes";

export interface IVariable{
    name:string,
    description:string,
    created_at:string,
    updated_at:string,
    deleted_at:string,
}

export interface VariableState{
    variables:[],
    error:string | null;
}

export interface FetchVariableSuccessPayload{
    variables: IVariable[];
}

export interface FetchVariableFailurePayload{
    error: string;
}

export type FetchVariableRequest = {
    type: typeof FETCH_VARIABLES_REQUEST;
}

export type FetchVariableSuccess = {
    type: typeof FETCH_VARIABLES_SUCCESS;
    payload: FetchVariableSuccessPayload;
}

export type FetchVariableFailure = {
    type: typeof FETCH_VARIABLES_FAILURE;
    payload: FetchVariableFailurePayload;
}

export type VariableActions = | FetchVariableFailure | FetchVariableSuccess | FetchVariableRequest;