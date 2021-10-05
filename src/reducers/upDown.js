const initialState = 0;

const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 5;
    case "DECREMENT":
      return state - 5;
    default:
      return state;
  }
};

// export const more5Number = (state = initialState, action) => {
//   switch (action.type) {
//     case "INC5NUMBER":
//       return state + 5;
//   }
// };

export default changeNumber;
