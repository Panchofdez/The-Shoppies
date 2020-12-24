const nominations = (state = [], action) => {
  switch (action.type) {
    case "SET_NOMINATIONS":
      return [...action.payload];
    default:
      return state;
  }
};

export default nominations;
