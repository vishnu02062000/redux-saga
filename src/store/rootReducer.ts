import { combineReducers } from "redux";

import variableReducer from "../redux/reducer";

const rootReducer = combineReducers({
    variable: variableReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;