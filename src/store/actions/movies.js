import axios from "axios";
import { message } from "antd";

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
      if (query === "") {
        dispatch(loadMovies([]));
        return;
      }
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=2ae0235e&s='${query}'`
      );
      if (response.data.Response && response.data.Response === "False") {
        //check to see if there are no results found or if there are too many results
        message.error(response.data.Error);
        dispatch(loadMovies([]));
        return;
      }
      dispatch(loadMovies(response.data.Search));
    } catch (err) {
      message.error(err);
    }
  };
};

export const fetchMovie = (id) => {
  //fetches more info about a particular movie
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=2ae0235e&i=${id}`
      );

      dispatch(showMovie(response.data));
    } catch (err) {
      message.error("Something went wrong...");
    }
  };
};
