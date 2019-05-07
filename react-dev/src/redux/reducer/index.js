import { combineReducers } from "redux";
import list from "./list.js";
import error from "./error";
import musicSheet from './musicSheet'

const rootReducer = combineReducers({
    list,
    musicSheet,
    error
});

export default rootReducer;
