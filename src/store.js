import { useStore } from "react-redux";
import { createStore } from "redux";
import { CounterReducer, second } from "./reducer.js";
import { amerLoginReducer } from "./loginReducer.js";

export const amerCounterStore = createStore(amerLoginReducer); // we need to fill This store with reducer
