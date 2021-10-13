import authReducer from "../reducer/auth";
import reducer from "../reducer/index";
import { combineReducers } from "redux";

export const rootReducers = combineReducers({
    searchPage: reducer,
    auth: authReducer
})
