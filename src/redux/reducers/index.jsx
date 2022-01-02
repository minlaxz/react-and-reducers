import userReducer from "./user";
import twoInputReducer from "./twoInput";
import anotherInputReducer from "./yetAnotherInput";

import { combineReducers } from "redux";

const reducers = combineReducers({
    userReducer,
    twoInputReducer,
    anotherInputReducer,
});

export default reducers;