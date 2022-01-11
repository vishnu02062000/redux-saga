import { createSelector } from "reselect";
import { AppState } from "../store/rootReducer";

const getVariables = (state: AppState) => state.variable.variables;
const getErrors = (state: AppState) => state.variable.error;


export const getVariableSelector = createSelector(getVariables, (variables) => variables);
export const getErrorSelector = createSelector(getErrors,(errors) => errors);