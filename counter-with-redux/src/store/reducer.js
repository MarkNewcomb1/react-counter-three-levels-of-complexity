import * as actionTypes from "./actions";

const initialState = {
count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        count: state.count++,
      };
    case actionTypes.DECREMENT:
      return {
        count: state.count--,
      };
    case actionTypes.RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
};

export default reducer;