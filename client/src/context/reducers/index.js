import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const myReducers = combineReducers({
  user: userReducer,
  products: productReducer,
});

export default myReducers;
