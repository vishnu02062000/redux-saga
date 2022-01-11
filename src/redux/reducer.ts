import {
    FETCH_VARIABLES_REQUEST,
    FETCH_VARIABLES_SUCCESS,
    FETCH_VARIABLES_FAILURE,
} from "./actionTypes";

import { VariableActions, VariableState } from "./types";

const initialState: VariableState = {
    variables: [],
    error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
const variableReducer = (state = initialState, action: VariableActions) => {
    switch (action.type) {
        case FETCH_VARIABLES_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case FETCH_VARIABLES_SUCCESS:
            return {
                ...state,
                pending: false,
                todos: action.payload.variables,
                error: null,
            };
        case FETCH_VARIABLES_FAILURE:
            return {
                ...state,
                pending: false,
                todos: [],
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};

export default variableReducer;