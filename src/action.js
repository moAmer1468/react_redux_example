import { DECREMENT, INCREMENT } from "./type.js";

export const incrementFun = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementFun = () => {
  return {
    type: DECREMENT,
  };
};
