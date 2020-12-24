// const addNomination = (movie) =>{
//     return {
//         type:"ADD_NOMINATION",
//         payload: movie
//     }
// }

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
    console.log("Hello");
    if (localStorage.nominations) {
      console.log(localStorage.nominations);
      const nominations = JSON.parse(localStorage.nominations);
      console.log(nominations);
      dispatch(setNominations(nominations));
    }
  };
};
