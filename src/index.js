import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { amerCounterStore } from "./stores/store";
// 3- Wrap all the application with Redux-Provider
// And This file will deal with store.js only Not reducer
// So The order if index => store => reducer
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={amerCounterStore}>
    <App />
  </Provider>
);
/**********************This is the Steps For all the mission ************* */
// 3- Wrap all the application with Redux-Provider
// And This file will deal with store.js only Not reducer
// So The order if index => store => reducer

// 1- This is the first step How to create The Store
// 2- second we need to create teh Reducer .. and send This one to Store
// 3- Wrap all the application with Redux-Provider .. in the index.js file
// 4-access data From store   with useSelector ... just used to show the data in reducer
// 5-change data in reducer with dispatch useDispatch .. to make any changes to reducer
//********************************************* */
/**
 *
 * This is just the second example uaAmer
 *
 */
// import React from "react";
// import { Provider } from "react-redux";
// import { amerCounter } from "./store";
// import { ReactDOM } from "react-dom/client";
// import { amerCounterStore } from "./store";
// import App from "./App";
// // 3- Wrap all the application with Redux-Provider
// // And This file will deal with store.js only Not reducer
// // So The order if index => store => reducer
// const amerRoot = ReactDOM.createRoot(document.getElementById("root"));

// amerRoot.render(<App></App>);
