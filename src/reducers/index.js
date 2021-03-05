import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import statistics from './statistics'

export default combineReducers({
    auth,
    message,
    statistics
});