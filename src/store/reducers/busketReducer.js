const busketReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDTO_BUSKET":
      let object_index = state.findIndex((obj) => obj.id === action.book.id);
      if (object_index >= 0) {
        state[object_index].amount += action.amount;
        return state;
      } else {
        action.book.amount = action.amount;
        return state.concat([action.book]);
      }
    default:
      return state;
  }
};

export default busketReducer;
