import {combineReducers} from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    countReducer,
    userReducer
}) ;
export default rootReducer