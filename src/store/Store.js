import { applyMiddleware, createStore } from "redux";
import rootReducers from "./Reducers";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";

const middlewares = [reduxThunk];
if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const store = createStore(rootReducers, applyMiddleware(...middlewares));
export default store;