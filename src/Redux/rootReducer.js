import { combineReducers } from "redux";

import { countReducer } from "./Counter/countReducer";
import userReducer from "./User/userReducer";

export  const rootReducer=combineReducers({
    count:countReducer,
    users:userReducer
})