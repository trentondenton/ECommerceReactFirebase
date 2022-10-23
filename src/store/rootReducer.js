import { combineReducers } from "redux";

// Reducers
import { userReducer } from "./user/userReducer";
import { categoriesReducer } from './category/categoryReducer';
import { cartReducer } from "./cart/cartReducer";

// Root Reducer
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});