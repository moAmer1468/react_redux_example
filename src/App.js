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
import { incrementFun, decrementFun } from "./actions/action";
import { loggedInFunc, loggedOutFunc } from "./actions/action.js";
import {
  gradeAFunc,
  gradeBFunc,
  gradeCFunc,
  gradeDFunc,
} from "./actions/action";
export function App() {
  // const result = useSelector((state) => state.counter);
  // const alaaName = useSelector((state) => state.name);

  // console.log(alaaName);
  // console.log(result);

  // //to access all actions uaAmer
  // const dispatchFunction = useDispatch();
  // return (
  //   <div>
  //     <h3>This is just heading : {result}</h3>
  //     <h3>This is just the name is : {alaaName}</h3>
  //     <button
  //       onClick={() => {
  //         dispatchFunction(incrementFun());
  //       }}
  //     >
  //       increment
  //     </button>
  //     <button
  //       onClick={() => {
  //         dispatchFunction(decrementFun());
  //       }}
  //     >
  //       decrement
  //     </button>
  //     <button
  //       onClick={() => {
  //         dispatchFunction({ type: "RESET" });
  //       }}
  //     >
  //       reset
  //     </button>
  // </div>
  // );
  /************** This is the new example uaamer be with us**************** */
  const resultOne = useSelector((state) => state.login); // This line used to view data
  const resultOneDispatch = useDispatch();
  // *********************** This is for Grade store or reducer uaAemr ******************
  const resultTwo = useSelector((state) => state.second);
  const resultTwoDispatch = useDispatch();
  // ***********************************
  const resultThree = useSelector((state) => state.degree);
  const resultThreeDispatch = useDispatch();

  console.log(resultOne);
  console.log(resultTwo);
  console.log(resultThree);

  return (
    <div>
      <h3>The Status of Login : {resultOne.value}</h3>
      <button
        onClick={() => {
          resultOneDispatch(loggedInFunc());
        }}
      >
        {" "}
        Make Him Logged In
      </button>
      <br />
      <button
        onClick={() => {
          resultOneDispatch(loggedOutFunc());
        }}
      >
        {" "}
        Make Him Logged Out
      </button>
      {/* ******************************************* */}
      <hr></hr>
      <div>
        Your grade is : {resultThree.grade} And your name is {resultThree.name}
      </div>
      <button
        onClick={() => {
          resultOneDispatch(gradeAFunc());
        }}
      >
        ChangeGradeTo0A
      </button>
      <button
        onClick={() => {
          resultThreeDispatch(gradeBFunc());
        }}
      >
        ChangeGradeToB
      </button>
      <button
        onClick={() => {
          resultThreeDispatch(gradeCFunc());
        }}
      >
        ChangeGradeToC
      </button>
      <button
        onClick={() => {
          resultThreeDispatch(gradeDFunc());
        }}
      >
        ChangeGradeToD
      </button>
    </div>
  );
}
export default App;
