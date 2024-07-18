import { applyMiddleware, createStore } from "redux";
import loggerMiddleware from "../middleware/loggerMiddleware";
import bookReducer from '../reducer/bookReducer'
export default createStore(bookReducer, applyMiddleware(loggerMiddleware));
