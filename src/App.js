// // This is used to access the data From Reducer
// // We will take the initial Object and Store it in the State variable
// // of the Anonymous function

// import { UseSelector, useSelector, useDispatch } from "react-redux";

// function App() {
//   // 4-access data From store reducer with useSelector ... just used to show the data in reducer
//   const data = useSelector((state) => state.counter);
//   console.log(data);

//   // 5-change data in reducer with dispatch .. to make any changes to reducer
//   const dispatchCounter = useDispatch();
//   return (
//     <div>
//       <h3>This is the heading {data}</h3>
//       <button
//         onClick={() => {
//           dispatchCounter({ type: "increment" });
//         }}
//       >
//         increment
//       </button>
//       <button
//         onClick={() => {
//           dispatchCounter({ type: "decrement" });
//         }}
//       >
//         Decrement
//       </button>
//       <button
//         onClick={() => {
//           dispatchCounter({ type: "reset" });
//         }}
//       >
//         reset
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementFun, decrementFun } from "./action";
export function App() {
  const result = useSelector((state) => state.counter);
  const alaaName = useSelector((state) => state.name);

  console.log(alaaName);
  console.log(result);

  const dispatchFunction = useDispatch();
  return (
    <div>
      <h3>This is just heading : {result}</h3>
      <h3>This is just the name is : {alaaName}</h3>
      <button
        onClick={() => {
          dispatchFunction(incrementFun());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatchFunction(decrementFun());
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatchFunction({ type: "RESET" });
        }}
      >
        reset
      </button>
    </div>
  );
}
export default App;
