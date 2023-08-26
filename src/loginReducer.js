export const amerLoginReducer = (
  initialObject = { isLogin: false, value: "Not login" },
  actionObject
) => {
  if (actionObject.type === "login") {
    return {
      isLogin: true,
      value: "loggedIn",
    };
  } else {
    return {
      isLogin: false,
      value: "loggedOut",
    };
  }
};
