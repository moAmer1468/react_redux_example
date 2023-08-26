export const amerDegreeReducer = (
  initialObject = { grade: "A", name: "MohaemdAmer" },
  actionObject
) => {
  switch (actionObject.type) {
    case "A":
      return {
        grade: "A",
        name: "Potter harry ",
        msg: "you are excellent",
      };
      break;
    case "B":
      return {
        grade: "B",
        name: "Islam amer ",
        msg: "you are Very Good",
      };
      break;
    case "C":
      return {
        grade: "C",
        name: "Yara yaser",
        msg: "you are Good",
      };
      break;
    default:
      return {
        grade: "D",
        name: "Mahmoud Ibrahim  ",
        msg: "You are so bad",
      };
      break;
  }
};
