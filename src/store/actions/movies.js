import * as t from '../types';
import api from '../../api';

const getAllMovies = () => (dispatch) => {
  return api.movies
    .getAllMovies()
    .then((response) => {
      const { data, status } = response;

      if (status < 300) {
        dispatch({
          type: t.GET_ALL_MOVIES,
          payload: data,
        });

        return response;
      }
    })
    .catch((error) => console.error(error));
};

const setFilm = (data) => (dispatch) => {
  dispatch({
    type: t.SET_FILM,
    payload: data,
  });
};

export { getAllMovies, setFilm };
