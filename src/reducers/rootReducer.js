import { amerDegreeReducer } from "./degreeReducer";
import { second } from "./reducer";
import { amerLoginReducer } from "./loginReducer";
import { combineReducers } from "redux";
export const RootReducer = combineReducers({
  degree: amerDegreeReducer,
  second: second,
  login: amerLoginReducer,
});
