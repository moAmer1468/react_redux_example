import { useStore } from "react-redux";
import { createStore } from "redux";
import { CounterReducer, second } from "./reducer.js";

export const amerCounterStore = createStore(second); // we need to fill This store with reducer
