import itemCounter from "./itemCounter";
import addtoCartReducer from "./addtoCartReducer";
import { combineReducers } from "redux";

export default combineReducers({ itemCounter, addtoCartReducer });
