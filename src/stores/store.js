import { useStore } from "react-redux";
import { createStore } from "redux";
import { CounterReducer, second } from "../reducers/reducer.js";
import { amerLoginReducer } from "../reducers/loginReducer.js";
import { amerDegreeReducer } from "../reducers/degreeReducer.js";
import { RootReducer } from "../reducers/rootReducer.js";
export const amerCounterStore = createStore(RootReducer); // we need to fill This store with reducer
