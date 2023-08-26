import "../types/type";
import { DECREMENT, INCREMENT, RESET } from "../types/type";
// export const CounterReducer = (
//   initialObject = { count: 0, name: "mohamed Alaa amer " },
//   actionObject
// ) => {
//   if (actionObject.type === "INCREMENT") {
//     return { counter: initialObject.counter + 1 };
//   }
//   if (actionObject.type === "DECREMENT") {
//     return { counter: initialObject.counter - 1 };
//   }
//   if (actionObject.type === "RESET") {
//     return { counter: 0 };
//   }
//   return initialObject;
// };
export const second = (
  initialObject = {
    counter: 1,
    name: "mohamed Alaa amer ",
    age: 22,
    found: false,
    died: false,
  },
  actionObject
) => {
  if (actionObject.type === INCREMENT) {
    return {
      counter: initialObject.counter + 1,
      name: "This incremented Name",
      age: initialObject.age + 1,
    };
  }
  if (actionObject.type === DECREMENT) {
    return {
      counter: initialObject.counter - 1,
      name: "This is incremented Name",
      age: initialObject.age - 1,
    };
  }
  if (actionObject.type === RESET) {
    return {
      counter: 0,
      name: "This name si reseted",
      age: initialObject.age,
    };
  }
  return initialObject;
};
