const setNominations = (nominations) => {
  return {
    type: "SET_NOMINATIONS",
    payload: nominations,
  };
};

export const updateNominations = (nominations) => {
  //when a user nominates another movie this will update the nominations that are stored in local storage and in state
  return (dispatch) => {
    dispatch(setNominations(nominations));
    localStorage.setItem("nominations", JSON.stringify(nominations));
  };
};

export const resetNominations = () => {
  //retrieves the nominations stored in localstorage
  return (dispatch) => {
    if (localStorage.nominations) {
      const nominations = JSON.parse(localStorage.nominations);
      dispatch(setNominations(nominations));
    }
  };
};
