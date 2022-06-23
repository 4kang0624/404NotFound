import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootreducer from "./modules/index";
import PromiseMiddleware from "redux-promise";
const logger = createLogger(); // initialize logger

const store = createStore(
  rootreducer,
  applyMiddleware(logger, PromiseMiddleware)
); // apply logger to redux

export default store;
