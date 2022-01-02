import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "../redux/reducers/user";
import createSagaMiddleware from "@redux-saga/core";
import { createLogger } from "redux-logger";
import rootSaga from "./sagas/rootSaga";

const reducers = combineReducers({
    // reducers
    userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
// check if devtools is available
const middlewares = [sagaMiddleware];
process.env.NODE_ENV === "development" && middlewares.push(logger);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;