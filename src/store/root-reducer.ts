import { combineReducers } from "redux";
import productSlice from "./products/slice";

const rootReducer = combineReducers({
  productStore: productSlice,

});

export default rootReducer;
