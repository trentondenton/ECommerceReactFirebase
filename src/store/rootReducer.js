import { combineReducers } from "redux";

// Reducers
import { userReducer } from "./user/userReducer";
import { categoriesReducer } from './category/categoryReducer';

// Root Reducer
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer
});