import { combineReducers } from "redux";

// Reducers
import { userReducer } from "./user/userReducer";


// Root Reducer
export const rootReducer = combineReducers({
  user: userReducer,
});