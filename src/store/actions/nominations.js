const setNominations = (nominations) => {
  return {
    type: "SET_NOMINATIONS",
    payload: nominations,
  };
};

export const updateNominations = (nominations) => {
  return (dispatch) => {
    dispatch(setNominations(nominations));
    localStorage.setItem("nominations", JSON.stringify(nominations));
  };
};

export const resetNominations = () => {
  return (dispatch) => {
    if (localStorage.nominations) {
      const nominations = JSON.parse(localStorage.nominations);
      dispatch(setNominations(nominations));
    }
  };
};
