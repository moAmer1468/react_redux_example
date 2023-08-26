import { DECREMENT, INCREMENT } from "../types/type";

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
export const loggedInFunc = () => {
  return {
    type: "login",
  };
};
export const loggedOutFunc = () => {
  return {
    type: "not login",
  };
};
export const gradeAFunc = () => {
  return {
    type: "A",
  };
};
export const gradeBFunc = () => {
  return {
    type: "B",
  };
};
export const gradeCFunc = () => {
  return {
    type: "C",
  };
};
export const gradeDFunc = () => {
  return {
    type: "D",
  };
};
