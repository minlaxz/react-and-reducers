import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/rootSaga";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const middlewares = [sagaMiddleware];
process.env.NODE_ENV === "development" && middlewares.push(logger);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;