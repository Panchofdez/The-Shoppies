import axios from "axios";

const loadMovies = (movies) => {
  return {
    type: "LOAD_MOVIES",
    payload: movies,
  };
};

const showMovie = (movie) => {
  return {
    type: "SET_MOVIE",
    payload: movie,
  };
};

export const searchMovies = (query) => {
  return async (dispatch) => {
    try {
      if (query == "") {
        dispatch(loadMovies([]));
      }
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=2ae0235e&s='${query}'`
      );
      console.log(response.data.Search);
      dispatch(loadMovies(response.data.Search));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchMovie = (id) => {
  return async (dispatch) => {
    try {
      console.log(id);
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=2ae0235e&i=${id}`
      );
      console.log(response.data);
      dispatch(showMovie(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};
